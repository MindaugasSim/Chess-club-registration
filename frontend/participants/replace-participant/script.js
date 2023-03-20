import {
  putParticipantObject,
  getParticipantByID,
} from "../../com/renderRequests.js";

let previousParticipantData;
const form = document.querySelector("form");
const urlParams = new URLSearchParams(window.location.search);
const participantId = urlParams.get("id");

const populateFormWithOldData = async () => {
  previousParticipantData = await getParticipantByID(participantId);
  form.participantName.value = previousParticipantData.name;
  form.surname.value = previousParticipantData.surname;
  form.email.value = previousParticipantData.email;
  form.personalCode.value = previousParticipantData.personalCode;
  form.dateStartedPlaying.value =
    previousParticipantData.dateStartedPlayingChess;
};

const saveNewParticipantData = async () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const participant = {
      name:
        previousParticipantData.name !== form.participantName.value
          ? form.participantName.value
          : previousParticipantData.name,
      surname:
        previousParticipantData.surname !== form.surname.value
          ? form.surname.value
          : previousParticipantData.surname,
      email:
        previousParticipantData.email !== form.email.value
          ? form.email.value
          : previousParticipantData.email,
      personalCode:
        previousParticipantData.personalCode !== form.personalCode.value
          ? form.personalCode.value
          : previousParticipantData.personalCode,
      dateStartedPlayingChess:
        previousParticipantData.dateStartedPlaying !==
        form.dateStartedPlaying.value
          ? form.dateStartedPlaying.value
          : previousParticipantData.dateStartedPlaying,
    };
    await putParticipantObject(participant, participantId);
    window.location.replace("../participants.html");
  });
};

const cancelButton = () => {
  document.getElementById("cancel").addEventListener("click", () => {
    window.location.replace("../participants.html");
  });
};

(async () => {
  await populateFormWithOldData();
  cancelButton();
  await saveNewParticipantData();
})();
