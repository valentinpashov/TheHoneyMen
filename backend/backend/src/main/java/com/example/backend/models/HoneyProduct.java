package com.example.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "honey_inventory")
public class HoneyProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private Double price;
    private Integer grams;
    private String imageUrl;

    public HoneyProduct() {
    }

    public HoneyProduct(String name, String type, Double price, Integer grams, String imageUrl) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.grams = grams;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public Integer getGrams() { return grams; }
    public void setGrams(Integer grams) { this.grams = grams; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}