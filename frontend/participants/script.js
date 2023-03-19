import {
  getCurrentParticipants,
  deleteParticipantById,
} from "../com/renderRequests.js";

export const currentData = async (participants) => {
  const table = document.querySelector("table");
  const tbody = document.querySelector("tbody");

  const tRowForHeader = document.createElement("tr");
  const tHeadName = document.createElement("th");
  const tHeadSurname = document.createElement("th");
  const tHeadEmail = document.createElement("th");
  const tHeadGender = document.createElement("th");
  const tHeadAge = document.createElement("th");
  const tHeadChessExp = document.createElement("th");

  tHeadName.innerText = "Name";
  tHeadSurname.innerText = "Surname";
  tHeadEmail.innerText = "Email";
  tHeadGender.innerText = "Gender";
  tHeadAge.innerText = "Age";
  tHeadChessExp.innerText = "Experience in chess";

  tRowForHeader.append(
    tHeadName,
    tHeadSurname,
    tHeadEmail,
    tHeadGender,
    tHeadAge,
    tHeadChessExp
  );

  table.append(tRowForHeader, tbody);

  if (participants.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyMessage = document.createElement("td");

    emptyMessage.setAttribute("colspan", "6");
    emptyMessage.innerText = "No participants found.";

    emptyRow.appendChild(emptyMessage);

    tbody.appendChild(emptyRow);
  } else {
    participants.forEach((p) => {
      const tr = document.createElement("tr");
      const nameTd = document.createElement("td");
      const surnameTd = document.createElement("td");
      const emailTd = document.createElement("td");
      const genderTd = document.createElement("td");
      const ageTd = document.createElement("td");
      const chessExpTd = document.createElement("td");

      nameTd.innerText = p.name;
      surnameTd.innerText = p.surname;
      emailTd.innerText = p.email;
      genderTd.innerText = p.gender;
      ageTd.innerText = p.age;
      chessExpTd.innerText = p.experienceInChess;

      tr.append(nameTd, surnameTd, emailTd, genderTd, ageTd, chessExpTd);
      tbody.appendChild(tr);

      tr.setAttribute("id", p.id);
    });
  }
};
// MAIN
(async () => {
  const participants = await getCurrentParticipants();
  currentData(participants);
  selectParticipant();
  addNewParticipantBtn();
  cancelBtn();
})();

async function selectParticipant() {
  const participants = await getCurrentParticipants();
  const tableRows = document.querySelectorAll("table tr:not(:first-child)");
  let selectedRow = null;

  tableRows.forEach((row) => {
    row.style.cursor = "pointer";
    row.addEventListener("click", function () {
      const participantId = this.getAttribute("id");

      participants.find((p) => p.participantId === participantId);

      if (selectedRow) {
        changeBg(selectedRow, false);
      }

      if (participantId != null) {
        changeBg(row, true);
        selectedRow = row;
        const deleteButton = document.getElementById("delete");
        deleteButton.addEventListener("click", deleteBtn(participantId));
        const editButton = document.getElementById("edit");
        editButton.addEventListener("click", editParticipantBtn(participantId));
      }
    });
  });
}

function changeBg(row, isSelected) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((b) => {
    b.disabled = false;
  });
  if (isSelected) {
    row.style.backgroundColor = "#AFEEEE";
  } else {
    row.style.backgroundColor = "";
  }
}

function addNewParticipantBtn() {
  document.getElementById("addParticipant").addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("add-participant/add-participant.html");
  });
}

function editParticipantBtn(participantId) {
  document.getElementById("edit").addEventListener("click", (e) => {
    e.preventDefault();
    location.replace(
      `edit-participant/edit-participant.html?id=${participantId}`
    );
  });
}

function cancelBtn() {
  document.getElementById("cancel").addEventListener("click", () => {
    location.reload();
  });
}

function deleteBtn(participantId) {
  return () => {
    if (confirm("Are you sure you want to delete this participant?")) {
      deleteParticipantById(participantId).then(() => {
        window.location.reload();
      });
    }
  };
}
