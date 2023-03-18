import { getCurrentParticipants } from "../com/renderRequests.js";

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
  cancelBtn();
  addNewParticipantBtn();
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
      console.log(participantId);

      if (selectedRow) {
        changeBg(selectedRow, false);
      }

      if (participantId != null) {
        changeBg(row, true);
        selectedRow = row;
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

function cancelBtn() {
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", () => {
    location.reload();
  });
}

function addNewParticipantBtn() {
  const addParticipantBtn = document.getElementById("addParticipant");
  addParticipantBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("add-participant/index.html");
  });
}
