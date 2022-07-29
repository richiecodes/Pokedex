package com.richiecodes.pokedex.controller;

import com.richiecodes.pokedex.exception.ResourceNotFoundException;
import com.richiecodes.pokedex.model.Pokemon;
import com.richiecodes.pokedex.repositories.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/pokemon")
@CrossOrigin
public class PokemonController {

    @Autowired
    private PokemonRepository repository;

    @GetMapping("/all")
    public List<Pokemon> getAllPokemon() {
        return repository.findAll();
    }

    @GetMapping("/random")
    public ResponseEntity<Pokemon> getRandomPokemon() {
        List<Pokemon> allPokemon = repository.findAll();

        Random r = new Random();


        return ResponseEntity.ok(allPokemon.get(r.nextInt(allPokemon.size())));
    }

    @GetMapping("search/id/{num}")
    public ResponseEntity<Pokemon> getPokemonByNum(int num) {
        Pokemon p = repository.findById(num).orElseThrow(() -> new ResourceNotFoundException("Cannot find pokemon!"));

        return ResponseEntity.ok(p);
    }

    @GetMapping("search/name/{name}")
    public ResponseEntity<Pokemon> getPokemonByName(@PathVariable String name) {
        Pokemon p = repository.findByName(name).orElseThrow(() -> new ResourceNotFoundException("Cannot find pokemon!"));


        return ResponseEntity.ok(p);
    }
}

