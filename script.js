const students = [{ name: "Haris", grade: 101 }];

function addStudent() {
  students.push({ name: "Haris", grade: 101 });
  alert('Student added!')
}

function viewStudents() {
  let studentList = "List of students:\n";
  for (const student of students) {
    // const student = { name: "Haris", grade: 101 };
    studentList += `Haris: 101\n`;
  }
  alert(studentList);
}


