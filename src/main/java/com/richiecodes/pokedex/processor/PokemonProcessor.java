package com.richiecodes.pokedex.processor;

import com.richiecodes.pokedex.model.Pokemon;
import com.richiecodes.pokedex.model.PokemonDTO;

import org.springframework.batch.item.ItemProcessor;

public class PokemonProcessor implements ItemProcessor<Pokemon, PokemonDTO> {

    @Override
    public PokemonDTO process(final Pokemon pokemon) throws Exception {
        System.out.println("Adding " + pokemon.getName().toUpperCase() + " (ID no: " + pokemon.getNum() + ") to SQL table...");

        return new PokemonDTO(pokemon.getNum(), pokemon.getName(), pokemon.getType1(), pokemon.getType2(),
                pokemon.getTotal(), pokemon.getHp(), pokemon.getAtt(), pokemon.getDef(), pokemon.getSpatk(), pokemon.getSpdef(),
                pokemon.getSpeed(), pokemon.getGen(), pokemon.getLegendary());
    }

}
