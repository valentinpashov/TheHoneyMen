package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // connect with React
public class HelloController {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello! This message come from Java!";
    }
}