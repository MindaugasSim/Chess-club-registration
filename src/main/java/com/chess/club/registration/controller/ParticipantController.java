package com.chess.club.registration.controller;

import com.chess.club.registration.converter.ParticipantConverter;
import com.chess.club.registration.dto.AddNewParticipantDto;
import com.chess.club.registration.dto.ParticipantDTO;
import com.chess.club.registration.services.ParticipantService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public void addParticipant(@RequestBody AddNewParticipantDto newParticipantDto) {
        this.participantService.addNewParticipant(ParticipantConverter.convertAddParticipantDtoToEntity(newParticipantDto));
    }

    @DeleteMapping("/{id}")
    public void deleteParticipantById(@PathVariable Long id) {
        this.participantService.deleteParticipantById(id);
    }

    @PatchMapping("/{id}")
    public void editParticipantById(@PathVariable Long id, @RequestBody AddNewParticipantDto participantDto) {
        this.participantService.editParticipantById(id, ParticipantConverter.convertAddParticipantDtoToEntity(participantDto));
    }

    @GetMapping("/{id}")
    public AddNewParticipantDto getParticipantById(@PathVariable Long id) {
        return ParticipantConverter.convertAddParticipantToDto(this.participantService.getParticipantById(id));
    }

    @PutMapping("/{id}")
    public void replaceParticipantById(@PathVariable Long id, @RequestBody AddNewParticipantDto replacedParticipantDto) {
        this.participantService.replaceParticipantById(id, ParticipantConverter.convertAddParticipantDtoToEntity(replacedParticipantDto));
    }
}
