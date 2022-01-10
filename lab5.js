let students = [];

function insertStudent(
  firstName,
  lastName,
  studentID,
  department,
  cycle,
  semester
) {
  var student = {
    firstName: firstName,
    lastName: lastName,
    studentID: studentID,
    department: department,
    cycle: cycle,
    semester: semester,
  };
  students.push(student);
}

function outputStudent(studentID) {
  let student = students.find((student) => student.studentID === studentID);
  document.getElementById("output").innerHTML =
    student.firstName + " " + student.lastName;
}
