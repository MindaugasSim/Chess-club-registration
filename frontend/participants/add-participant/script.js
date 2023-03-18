import { addNewParticipant } from "../../com/renderRequests.js";

const saveFormData = async () => {
  const form = document.querySelector("form");
  const saveBtn = document.getElementById("save");
  saveBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const participant = {
      name: form.participantName.value,
      surname: form.surname.value,
      email: form.email.value,
      personalCode: form.personalCode.value,
      dateStartedPlayingChess: form.dateStartedPlaying.value,
    };
    await addNewParticipant(participant);
    window.location.replace("../index.html");
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
