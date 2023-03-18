package com.chess.club.registration.converter;

import com.chess.club.registration.dto.AddNewParticipantDto;
import com.chess.club.registration.dto.ParticipantDTO;
import com.chess.club.registration.entities.AdditionalInfo;
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

    public static Participant convertAddParticipantDtoToEntity(AddNewParticipantDto newParticipantDto) {
        Participant participant = null;
        if (newParticipantDto != null) {
            participant = new Participant();
            AdditionalInfo additionalInfo = new AdditionalInfo();
            participant.setName(newParticipantDto.getName());
            participant.setSurname(newParticipantDto.getSurname());
            participant.setPersonalCode(newParticipantDto.getPersonalCode());
            additionalInfo.setEmail(newParticipantDto.getEmail());
            additionalInfo.setDateStartedPlayingChess(newParticipantDto.getDateStartedPlayingChess());
            participant.setAdditionalInfo(additionalInfo);
        }
        return participant;
    }
}
