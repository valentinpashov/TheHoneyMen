package com.example.backend.controllers;

import com.example.backend.models.HoneyProduct;
import com.example.backend.repositories.HoneyRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // Access visible for website
@RequestMapping("/api/honey") // this is the address: http://localhost:8080/api/honey
@CrossOrigin(origins = "http://localhost:3000") // Access for React (Frontend) to see the data
public class HoneyController {

    private final HoneyRepository honeyRepository;

    public HoneyController(HoneyRepository honeyRepository) {
        this.honeyRepository = honeyRepository;
    }

    @GetMapping
    public List<HoneyProduct> getAllHoney() {
        // return list with all products
        return honeyRepository.findAll();
    }
}