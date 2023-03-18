const BASE_URL = "http://localhost:8080/api";

export const getCurrentParticipants = async () => {
  const response = await fetch(`${BASE_URL}/participants`);
  const participants = await response.json();
  return participants;
};

export const addNewParticipant = async (participant) => {
  await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(participant),
  });

  alert("Participant added");
};

export const deleteParticipantById = async (participantId) => {
  await fetch(`${BASE_URL}/${participantId}`, {
    method: "DELETE",
  });

  alert(`[Participant ${participantId}] deleted successfully`);
};
