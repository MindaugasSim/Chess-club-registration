package com.chess.club.registration.converter;

import com.chess.club.registration.dto.ParticipantDTO;
import com.chess.club.registration.entities.Participant;

import java.util.ArrayList;
import java.util.List;

public abstract class ParticipantConverter {

    public static ParticipantDTO convertParticipantToDto(Participant participant) {
        ParticipantDTO participantDTO = null;
        if (participant != null) {
            participantDTO = new ParticipantDTO();
            participantDTO.setId(participant.getId());
            participantDTO.setName(participant.getName());
            participantDTO.setSurname(participant.getSurname());
            participantDTO.setEmail(participant.getAdditionalInfo().getEmail());
            participantDTO.setGender(
                    participant
                            .getParticipantGender(
                                    participant
                                            .getPersonalCode()));
            participantDTO.setAge(
                    participant
                            .getParticipantAge(
                                    participant
                                            .getPersonalCode()));
            participantDTO.setExperienceInChess(
                    participant
                            .getAdditionalInfo()
                            .getExperienceInChess(
                                    participant
                                            .getAdditionalInfo()
                                            .getDateStartedPlayingChess()
                            )
            );
        }
        return participantDTO;
    }

    public static List<ParticipantDTO> convertParticipantListToDto(List<Participant> participantList) {
        List<ParticipantDTO> participantDTOList = null;
        for (Participant participant : participantList) {
            if (participantDTOList == null) {
                participantDTOList = new ArrayList<>();
            }
            participantDTOList.add(ParticipantConverter.convertParticipantToDto(participant));
        }
        return participantDTOList;
    }
}
