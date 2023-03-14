package com.chess.club.registration.controller;

import com.chess.club.registration.entities.Participant;
import com.chess.club.registration.services.ParticipantService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ParticipantController {
    private final ParticipantService participantService;

    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @GetMapping("/participants")
    public List<Participant> getAllParticipants() {
        return participantService.loadAllParticipants();
    }
}
