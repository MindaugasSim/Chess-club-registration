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
  tHeadAge.innerText = "Age"; // todo
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
    // const buttonsTd = document.createElement("td");

    nameTd.innerText = p.name;
    surnameTd.innerText = p.surname;
    emailTd.innerText = p.email;
    genderTd.innerText = p.gender;
    ageTd.innerText = p.age;
    chessExpTd.innerText = p.experienceInChess;

    tr.append(
      nameTd,
      surnameTd,
      emailTd,
      genderTd,
      ageTd,
      chessExpTd
      //   buttonsTd
    );
    tbody.appendChild(tr);
  });
};

(async () => {
  const participants = await getCurrentParticipants();
  currentData(participants);
})();
