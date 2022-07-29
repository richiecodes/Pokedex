package com.richiecodes.pokedex.config;

import com.richiecodes.pokedex.listener.JobListener;
import com.richiecodes.pokedex.model.Pokemon;
import com.richiecodes.pokedex.model.PokemonDTO;
import com.richiecodes.pokedex.processor.PokemonProcessor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.DefaultBatchConfigurer;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;

import javax.sql.DataSource;

@Configuration
@EnableBatchProcessing
public class SpringBatchConfig extends DefaultBatchConfigurer {
    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Autowired
    public DataSource datasource;

    @Bean
    public FlatFileItemReader<Pokemon> reader() {
        FlatFileItemReader<Pokemon> reader = new FlatFileItemReader<>();

        FileSystemResource resource = new FileSystemResource("pokemon.csv");

        reader.setResource(resource);
        reader.setName("CSV-Reader");
        reader.setLinesToSkip(1);

        reader.setLineMapper(new DefaultLineMapper<>() {{
            setLineTokenizer(new DelimitedLineTokenizer() {{
                setNames("num", "name", "type1", "type2", "total", "hp", "att", "def", "spatk", "spdef", "speed", "gen", "legendary");
            }});
            setFieldSetMapper(new BeanWrapperFieldSetMapper<>() {{
                setTargetType(Pokemon.class);
            }});
        }});

        return reader;
    }

    @Bean
    public PokemonProcessor processor() {
        return new PokemonProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<PokemonDTO> writer() {
        JdbcBatchItemWriter<PokemonDTO> writer = new JdbcBatchItemWriter<>();
        writer.setItemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>());
        writer.setSql("INSERT INTO pokemon (num,name,type1,type2,total,hp,att,def,spatk,spdef,speed,gen,legendary) " + "VALUES (:num,:name,:type1,:type2,:total,:hp,:att,:def,:spatk,:spdef,:speed,:gen,:legendary)");
        writer.setDataSource(datasource);

        return writer;
    }

    @Bean
    public Job importUserJob(JobListener listener) {
        return jobBuilderFactory.get("importUserJob")
                .incrementer(new RunIdIncrementer())
                .listener(listener)
                .flow(step1())
                .end()
                .build();
    }

    @Bean
    public Step step1() {
        return stepBuilderFactory.get("step1")
                .<Pokemon, PokemonDTO> chunk(10)
                .reader(reader())
                .processor(processor())
                .writer(writer())
                .build();
    }

}
