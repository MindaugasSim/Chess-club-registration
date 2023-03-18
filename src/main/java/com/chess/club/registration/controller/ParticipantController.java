package com.chess.club.registration.controller;

import com.chess.club.registration.converter.ParticipantConverter;
import com.chess.club.registration.dto.ParticipantDTO;
import com.chess.club.registration.services.ParticipantService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ParticipantController {
    private final ParticipantService participantService;

    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @GetMapping("/participants")
    public List<ParticipantDTO> getAllParticipants() {
        return ParticipantConverter.convertParticipantListToDto(this.participantService.loadAllParticipants());
    }
}
