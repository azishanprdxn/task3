// On Form Reset
function onFormReset() {
  // This will reset all the content inside the form
  document.querySelector('form').reset();
  // This will hide all the helper text from the form
  var length = document.getElementsByClassName('helper').length;
  for (var i = 0; i < length; i++) {
    document.getElementsByClassName('helper')[i].style.display = "none";
  }
}

// On Submit Function
function onFormSubmit() {
  // Store value from the input given by the user
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var getGender = document.getElementsByName('gender');
  for (var i = 0; i < getGender.length; i++) {
    if (getGender[i].checked) {
      var gender = getGender[i].value;
    }
  }
  var address = document.getElementById('address').value;
  var terms = document.getElementById('terms');

  // Getting Helper for Errors
  var length = document.getElementsByClassName('helper').length;
  var helperArray = [];
  for (var i = 0; i < length; i++) {
    helperArray.push(document.getElementsByClassName('helper')[i]);
  }

  // For Firstname
  if (!firstName) {
    helperArray[0].style.display = "inline";
  } else {
    helperArray[0].style.display = "none";
  }

  // For Lastname
  if (!lastName) {
    helperArray[1].style.display = "inline";
  } else {
    helperArray[1].style.display = "none";
  }

  // For Gender
  if (gender == undefined) {
    helperArray[2].style.display = "inline";
  } else {
    helperArray[2].style.display = "none";
  }

  // For Address
  if (!address) {
    helperArray[3].style.display = "inline";
  } else {
    helperArray[3].style.display = "none";
  }

  // For Terms
  if (terms.checked == false) {
    helperArray[4].style.display = "inline";
  } else {
    helperArray[4].style.display = "none";
  }

  // Validate if all the data is filled
  if (!firstName || !lastName || gender == undefined || !address || terms.checked == false) {
    return;
  } else { // Run this if all the data is filled
    alert("Thank You!");
    // Displays the datatable when an entry is made
    document.getElementsByTagName('table')[0].style.display = "table";
    document.getElementById('data').innerHTML +=
      "<tr>" +
      "<td>" + firstName + "</td>" +
      "<td>" + lastName + "</td>" +
      "<td>" + gender + "</td>" +
      "<td>" + address + "</td>" +
      "<td>" + "<button type='button' id='editData' value='Edit' onclick='onEdit(this)'>Edit</button>" + "</td>" +
      "<td>" + "<button type='button' id='deleteData' value='Delete' onclick='onDelete()'>Delete</button>" + "</td>" +
      "</tr>";

    // Reset the current form data
    document.querySelector('form').reset();
  }
}

// On Edit Function
function onEdit(tableData) {
  // Get data into input boxes
  var selectedRow = tableData.parentElement.parentElement;
  document.getElementById("first-name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("last-name").value = selectedRow.cells[1].innerHTML;
  if (selectedRow.cells[2].innerHTML == "Male") {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
  document.getElementById("terms").checked = true;

  // Remove that particular row
  var tableBody = document.querySelector('tbody');
  var tableRow = document.querySelectorAll("tbody tr");
  var length = tableRow.length;
  for (var i = 0; i < length; i++) {
    tableRow[i].onclick = function () {
      tableBody.removeChild(this);
    }
  }
  if (length-1 == 0) {
    // Hides the datatable when there is 0 entry
    document.getElementsByTagName('table')[0].style.display = "none";
  }
}

// On Delete Function
function onDelete() {
  var isConfirmed = confirm("Do you want to delete this entry?");
  if (isConfirmed) {
    var tableBody = document.querySelector('tbody');
    var tableRow = document.querySelectorAll("tbody tr");
    var length = tableRow.length;
    for (var i = 0; i < length; i++) {
      tableRow[i].onclick = function () {
        tableBody.removeChild(this);
      }
    }
    if (length-1 == 0) {
      // Hides the datatable when there is 0 entry
      document.getElementsByTagName('table')[0].style.display = "none";
    }
  }
} 