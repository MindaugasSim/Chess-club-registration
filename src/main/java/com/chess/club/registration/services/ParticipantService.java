package com.chess.club.registration.services;

import com.chess.club.registration.entities.AdditionalInfo;
import com.chess.club.registration.entities.Participant;
import com.chess.club.registration.repository.ParticipantRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ParticipantService {
    //    private final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM");
    private final ParticipantRepository participantRepository;

    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    public void loadTestData() {
        String[] name = {
                "Tomas",
                "Akvilė",
                "Petras",
                "Gintas",
                "Simona",
                "Danielius",
                "Andrius",
                "Erikaa",
                "Mindaugas",
                "Marius"
        };
        String[] surname = {
                "Petrauskas",
                "Jankauskaitė",
                "Žukauskas",
                "Butkus",
                "Balčiūnaitė",
                "Paulauskas",
                "Vasiliauskas",
                "Žemaitė",
                "Urbonas",
                "Navickas"
        };
        String[] personalCode = {
                "38201020001",
                "49002040002",
                "39303060003",
                "36404080004",
                "46905100005",
                "36506120006",
                "39107140007",
                "47708160008",
                "37609180009",
                "38710200010"
        };
        String[] email = {
                "Petrauskas@gmail.com",
                "Jankauskaitė@gmail.com",
                "Žukauskas@gmail.com",
                "Butkus@gmail.com",
                "Balčiūnaitė@gmail.com",
                "Paulauskas@gmail.com",
                "Vasiliauskas@gmail.com",
                "Žemaitė@gmail.com",
                "Urbonas@gmail.com",
                "Navickas@gmail.com"
        };
        String[] dateStartedPlayingChess = {
                "2000-10-06",
                "2015-03-08",
                "2006-12-10",
                "1990-03-12",
                "1996-10-14",
                "2003-04-16",
                "1994-01-18",
                "1997-05-20",
                "1995-06-22",
                "1993-04-24"
        };

        for (int i = 0; i < 10; i++) {
            Participant participant = new Participant();
            participant.setName(name[i]);
            participant.setSurname(surname[i]);
            participant.setPersonalCode(personalCode[i]);

//            AdditionalInfo additionalInfo = new AdditionalInfo();
//            additionalInfo.setEmail(email[i]);
//            additionalInfo.setDateStartedPlayingChess(LocalDate.parse(dateStartedPlayingChess[i]));
//
//            participant.setAdditionalInfo(additionalInfo);

            this.participantRepository.saveAndFlush(participant);
        }
    }

    public List<Participant> loadAllParticipants() {
        return this.participantRepository.findAll();
    }
}
