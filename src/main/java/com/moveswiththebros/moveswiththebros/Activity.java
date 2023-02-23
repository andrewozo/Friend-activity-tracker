package com.moveswiththebros.moveswiththebros;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table
public class Activity {
    @Id
    @SequenceGenerator(name = "activity_sequence", sequenceName = "activity_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activity_sequence")
    private Long id;
    private String spotName;
    private LocalDate date;
    private double amount;
    private String putCardDown;

    public Activity() {
    }

    public Activity(String spotName, LocalDate date, double amount, String putCardDown) {
        this.spotName = spotName;
        this.date = date;
        this.amount = amount;
        this.putCardDown = putCardDown;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpotName() {
        return spotName;
    }

    public void setSpotName(String spotName) {
        this.spotName = spotName;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getPutCardDown() {
        return putCardDown;
    }

    public void setPutCardDown(String putCardDown) {
        this.putCardDown = putCardDown;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", spotName='" + spotName + '\'' +
                ", date=" + date +
                ", amount=" + amount +
                ", putCardDown='" + putCardDown + '\'' +
                '}';
    }
}
