package com.example.backend.repositories;

import com.example.backend.models.HoneyProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoneyRepository extends JpaRepository<HoneyProduct, Long> {
    // .save()   -> save honey
    // .findAll() -> find all honey
    // .delete()  -> de;ete honey
}