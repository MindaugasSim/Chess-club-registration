package com.chess.club.registration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AddNewParticipantDto {
    private String name;
    private String surname;
    private String email;
    private String personalCode;
    private String dateStartedPlayingChess;

}
