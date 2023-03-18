import {
  getCurrentParticipants,
  deleteParticipantById,
} from "../com/renderRequests.js";

const currentData = async (participants) => {
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
  const addParticipantBtn = document.getElementById("addParticipant");
  addParticipantBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("add-participant/index.html");
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
