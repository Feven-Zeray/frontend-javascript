// task_0/js/main.ts

// ✅ Task 0 – Student Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// ✅ Create two students
const student1: Student = {
  firstName: "Feven",
  lastName: "Zeray",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Dereje",
  lastName: "Masresha",
  age: 23,
  location: "Mekelle",
};

// ✅ Store students in an array
const studentsList: Student[] = [student1, student2];

// ✅ Render a table with Vanilla JS
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
