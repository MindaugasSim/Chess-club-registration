package com.chess.club.registration.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.Period;
import java.time.Year;

@Entity(name = "participants")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String name;
    private String surname;
    private String personalCode;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "additionalInfo_id", referencedColumnName = "id")
    private AdditionalInfo additionalInfo;

    public String getParticipantGender(String personalCode) {
        String participantGender;
        return switch (personalCode.charAt(0)) {
            case '3', '5' -> participantGender = "Vyras";
            case '4', '6' -> participantGender = "Moteris";
            default -> participantGender = "Nežinoma";
        };
    }

    public int getParticipantAge(String personalCode) {
        int currentYear = Year.now().getValue();
        int currentMonth = LocalDate.now().getMonthValue();
        int currentDay = LocalDate.now().getDayOfMonth();
        int participantAge = 0;

        int birthYear = 0;
        int birthMonth = 0;
        int birthDay = 0;

        if (personalCode.charAt(0) == '3' || personalCode.charAt(0) == '4') {
            birthYear = Integer.parseInt(personalCode.substring(1, 3)) + 1900;
            birthMonth = Integer.parseInt(personalCode.substring(3, 5));
            birthDay = Integer.parseInt(personalCode.substring(5, 7));
        } else if (personalCode.charAt(0) == '5' || personalCode.charAt(0) == '6') {
            birthYear = Integer.parseInt(personalCode.substring(1, 3)) + 2000;
            birthMonth = Integer.parseInt(personalCode.substring(3, 5));
            birthDay = Integer.parseInt(personalCode.substring(5, 7));
        } else {
            return participantAge;
        }

        int ageYear = currentYear - birthYear;
        int ageMonth = currentMonth - birthMonth;
        int ageDay = currentDay - birthDay;

        if (ageDay < 0) {
            ageMonth--;
            ageDay += LocalDate.now().minusMonths(1).getMonth().length(LocalDate.now().isLeapYear()) ;
        }
        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }

        double ageInDays = ageYear * 365 + ageMonth * 30 + ageDay;
        participantAge = (int) (ageInDays / 365);

        return participantAge;
    }
}
