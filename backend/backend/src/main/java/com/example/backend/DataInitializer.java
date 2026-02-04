package com.example.backend;

import com.example.backend.models.HoneyProduct;
import com.example.backend.repositories.HoneyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final HoneyRepository honeyRepository;

    public DataInitializer(HoneyRepository honeyRepository) {
        this.honeyRepository = honeyRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check up are there products
        if (honeyRepository.count() == 0) {

            // Product 1
            HoneyProduct acacia = new HoneyProduct(
                    "Букет",
                    "Букет",
                    15.00,
                    1000,
                    "/images/buket.jfif"
            );

            // Product 2
            HoneyProduct manov = new HoneyProduct(
                    "Манов",
                    "Манов",
                    15.00,
                    1000,
                    "/images/manov.jfif"
            );

            // Product 3
            HoneyProduct herbal = new HoneyProduct(
                    "Букет",
                    "Букет",
                    10.00,
                    450,
                    "/images/middlejar.jfif"
            );

            // Write all products
            honeyRepository.saveAll(List.of(acacia, manov, herbal));

            System.out.println("✅ Успешно заредихме 3 вида мед в склада!");
        } else {
            System.out.println("ℹ️ Складът вече е зареден. Няма нужда да добавяме пак.");
        }
    }
}