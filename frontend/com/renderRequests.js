const BASE_URL = "http://localhost:8080/api";

export const getCurrentParticipants = async () => {
  const response = await fetch(`${BASE_URL}/participants`);
  const participants = await response.json();
  console.log(participants);
  return participants;
};
