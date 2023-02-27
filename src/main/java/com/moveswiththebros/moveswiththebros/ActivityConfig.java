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
                    "Gyu Kaku", LocalDate.of(2023, Month.FEBRUARY,03),103.75,"Julio"
            );
            Activity kyu = new Activity("Kyu Ramen",LocalDate.of(2023,Month.JANUARY,22),65.50,"Andrew");
           activityRepository.saveAll(List.of(gyu,kyu));
        };
    }
}
