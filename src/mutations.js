import generateIndex from "./helpers/generateIndex";
import getStudentsById from "./helpers/getStudentsById";

function logIn(state) {
  state.userIsLoggedIn = true;
}

function logOut(state) {
  state.userIsLoggedIn = false;
  state.rememberUser = false;
}

function rememberUser(state) {
  state.rememberUser = true;
}

function setLog(index, operationType) {
  let logMsg = `Added new student with index ${index}`;

  switch (operationType) {
    case "add":
      logMsg = `Added new student with index ${index}`;
      break;
    case "edit":
      logMsg = `Edited student with index ${index}`;
      break;
    case "archive":
      logMsg = `Archived student with index ${index}`;
      break;
    case "restore":
      logMsg = `Restored student with index ${index}`;
      break;
  }

  const date = new Date().toISOString().split("T")[0];
  const log = {
    logMsg,
    date,
  };

  return log;
}

function addNewStudent(
  state,
  { studentFullName, studentDob, studentMunicipality }
) {
  const index = generateIndex();
  const log = setLog(index, "add");

  let newStudent = {
    index: index,
    full_name: studentFullName,
    date_of_birth: studentDob,
    municipality: studentMunicipality,
  };

  state.students.push(newStudent);
  state.logs.unshift(log);
}

function editStudent(
  state,
  { studentIndex, newStudentFullName, newStudentDob, newStudentMunicipality }
) {
  const log = setLog(studentIndex, "edit");

  let studentToEditIndex = state.students.findIndex(
    (student) => student.index === studentIndex
  );

  let newInfo = {
    index: studentIndex,
    full_name: newStudentFullName,
    date_of_birth: newStudentDob,
    municipality: newStudentMunicipality,
  };

  state.students.splice(studentToEditIndex, 1, newInfo);
  state.logs.unshift(log);
}

function archiveStudent(state, studentIndex) {
  const log = setLog(studentIndex, "archive");

  let dateArchived = new Date().toISOString().split("T")[0];
  let studentToArchive = getStudentsById(state, "students", studentIndex);
  let studentToArchiveIndex = state.students.indexOf(...studentToArchive);
  let archivedStudent = [...state.students.splice(studentToArchiveIndex, 1)];

  archivedStudent[0]["date_archived"] = dateArchived;

  state.archivedStudents.push(...archivedStudent);
  state.logs.unshift(log);
}

function restoreStudent(state, studentIndex) {
  const log = setLog(studentIndex, "restore");

  let studentToRestore = getStudentsById(
    state,
    "archivedStudents",
    studentIndex
  );

  delete studentToRestore[0]["date_archived"];

  state.archivedStudents.splice(
    state.archivedStudents.indexOf(...studentToRestore),
    1
  );

  state.students.push(...studentToRestore);
  state.logs.unshift(log);
}

function setSearchQuery(state, value) {
  state.searchQuery = value;
}

function clearSearchQuery(state) {
  state.searchQuery = "";
}

function clearLogs(state) {
  state.logs = [];
}

function initialiseStore(state) {
  if (localStorage.getItem("store")) {
    this.replaceState(
      Object.assign(state, JSON.parse(localStorage.getItem("store")))
    );
  }

  if (sessionStorage.getItem("userIsLoggedIn")) {
    state.userIsLoggedIn = JSON.parse(sessionStorage.getItem("userIsLoggedIn"));
  }
}

export default {
  logIn,
  logOut,
  rememberUser,
  addNewStudent,
  editStudent,
  archiveStudent,
  restoreStudent,
  setSearchQuery,
  clearSearchQuery,
  clearLogs,
  initialiseStore,
};
