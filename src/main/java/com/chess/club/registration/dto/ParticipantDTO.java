package com.chess.club.registration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ParticipantDTO {
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String gender;
    private Integer age;
    private String experienceInChess;
}
