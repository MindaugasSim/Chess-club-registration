import { addNewParticipant } from "../../com/renderRequests.js";

const saveFormData = async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const participant = {
      name: form.participantName.value,
      surname: form.surname.value,
      email: form.email.value,
      personalCode: form.personalCode.value,
      dateStartedPlayingChess: form.dateStartedPlaying.value,
    };
    console.log(participant);
    await addNewParticipant(participant);
    window.location.replace("../participants.html");
  });
};

const cancelButton = () => {
  document.getElementById("cancel").addEventListener("click", () => {
    window.location.replace("../participants.html");
  });
};

(async () => {
  cancelButton();
  await saveFormData();
})();
