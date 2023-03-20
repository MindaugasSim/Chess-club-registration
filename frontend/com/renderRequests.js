const BASE_URL = "http://localhost:8080/api";

export const getCurrentParticipants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/participants`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const text = await response.text();
    if (!text) {
      return [];
    }
    const participants = JSON.parse(text);
    return participants;
  } catch (error) {
    console.error("Error fetching participants:", error);
    return [];
  }
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

  alert(`Participant deleted successfully`);
};

export const patchParticipantObject = async (participant, id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(participant),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert(`Participant updated successfully`);
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const getParticipantByID = async (participantId) => {
  try {
    const response = await fetch(`${BASE_URL}/${participantId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const participant = await response.json();
    return participant;
  } catch (error) {
    console.error("Error fetching participant:", error);
    throw error;
  }
};

export const putParticipantObject = async (participant, id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(participant),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert(`Participant replaced successfully!`);
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
