package com.chess.club.registration.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
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
        int participantAge = 0;
        if (personalCode.charAt(0) == '3' || personalCode.charAt(0) == '4') {
            return participantAge = currentYear - (Integer.parseInt(personalCode.substring(1, 3)) + 1900);
        }
        if (personalCode.charAt(0) == '5' || personalCode.charAt(0) == '6') {
            return participantAge = currentYear - (Integer.parseInt(personalCode.substring(1, 3)) + 2000);
        }
        return participantAge;
    }
}
