package com.chess.club.registration.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String personalCode;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "additionalInfo")
    private AdditionalInfo additionalInfo;
}
