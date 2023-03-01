package com.moveswiththebros.moveswiththebros;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ActivityConfig {
    @Bean
    CommandLineRunner commandLineRunner(ActivityRepository activityRepository){
        return args -> {
            Activity gyu = new Activity(
                    "Gyu Kaku","02/03/2023",103.75,"Julio"
            );
            Activity kyu = new Activity("Kyu Ramen","01/01/2023",65.50,"Andrew");
           activityRepository.saveAll(List.of(gyu,kyu));
        };
    }
}
