package com.richiecodes.pokedex.repositories;

import com.richiecodes.pokedex.model.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {
    List<Pokemon> findByNum(Integer num);

    @Query(value = "SELECT * FROM pokemon p WHERE p.name = :name", nativeQuery = true)
    Optional<Pokemon> findByName(@Param("name") String name);

}
