package com.chess.club.registration.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AdditionalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String dateStartedPlayingChess;

    @OneToOne(mappedBy = "additionalInfo", fetch = FetchType.LAZY)
    private Participant participant;

    public String getExperienceInChess(String dateStartedPlayingChess) {
        LocalDate dateStarted = LocalDate.parse(dateStartedPlayingChess);
        LocalDate now = LocalDate.now();
        Period period = Period.between(dateStarted, now);
        int years = period.getYears();
        int months = period.getMonths();

        String formattedYears = years + "m.";
        String formattedMonths = months + "mėn.";

        if (years == 0) {
            return formattedMonths;
        } else if (months == 0) {
            return formattedYears;
        } else {
            return formattedYears + " " + formattedMonths;
        }
    }
}
