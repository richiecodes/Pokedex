package com.richiecodes.pokedex.repositories;

import com.richiecodes.pokedex.model.ERole;
import com.richiecodes.pokedex.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
