package com.chess.club.registration;

import com.chess.club.registration.services.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class RegistrationApplication {

	@Autowired
	private ParticipantService participantService;

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		this.participantService.loadTestData();
	}

}
