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
                    "Златна Акация",
                    "Акация",
                    20.00,
                    950,
                    "https://i.imgur.com/Q7bN0Xp.jpg" 
            );

            // Product 2
            HoneyProduct manov = new HoneyProduct(
                    "Тъмен Манов Еликсир",
                    "Манов",
                    25.00,
                    950,
                    "https://i.imgur.com/w3F6fXq.jpg"
            );

            // Product 3
            HoneyProduct herbal = new HoneyProduct(
                    "Планински Букет",
                    "Билков",
                    15.00,
                    950,
                    "https://i.imgur.com/K8tWb5m.jpg"
            );

            // Write all products
            honeyRepository.saveAll(List.of(acacia, manov, herbal));

            System.out.println("✅ Успешно заредихме 3 вида мед в склада!");
        } else {
            System.out.println("ℹ️ Складът вече е зареден. Няма нужда да добавяме пак.");
        }
    }
}