function addCourse() {
    let course = document.getElementById("course").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;

    let table = document.getElementById("timetable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.textContent = day;
    cell2.textContent = course;

// Add random color
let colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];
row.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    cell3.textContent = time;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.onclick = function() {
        table.deleteRow(row.rowIndex);
    };

    cell4.appendChild(delBtn);
}s