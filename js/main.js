function taxiType() {
  var type;
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;
  if (uberX) type = "uberX";
  else if (uberSUV) type = "uberSUV";
  else if (uberBlack) type = "uberBlack";
  return type;
}

function validateForm() {
  var km = document.forms["taxiCalculator"]["name"].value;
  if (km == "") {
    alert("Distance must be filled out");
    return false;
  }
  return true;
}

function pay() {
  var km = document.getElementById("km").value;
  var taxi = taxiType();
  if (km == "") alert("Distance must be filled");
  else if (taxi == undefined) alert("Choose uber type");
  else {
    var waitingTime = document.getElementById("waitingTime").value;

    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";

    var totalDisplay = document.getElementById("xuatTien");
    var totalCost = 0;
    switch (taxi) {
      case "uberX":
        if (km <= 1) totalCost = km * 8000 + waitingTime * 2000;
        else if (km > 1 && km <= 20)
          totalCost = 8000 + (km - 1) * 12000 + waitingTime * 2000;
        else if (km > 20)
          totalCost =
            8000 + 12000 * 20 + (km - 21) * 10000 + waitingTime * 2000;
        break;
      case "uberSUV":
        if (km <= 1) totalCost = km * 9000 + waitingTime * 3000;
        else if (km > 1 && km <= 20)
          totalCost = 8000 + (km - 1) * 14000 + waitingTime * 3000;
        else if (km > 20)
          totalCost =
            8000 + 14000 * 20 + (km - 21) * 12000 + waitingTime * 3000;
        break;
      case "uberBlack":
        if (km <= 1) totalCost = km * 10000 + waitingTime * 4000;
        else if (km > 1 && km <= 20)
          totalCost = 10000 + (km - 1) * 16000 + waitingTime * 4000;
        else if (km > 20)
          totalCost =
            10000 + 16000 * 20 + (km - 21) * 14000 + waitingTime * 4000;
        break;
    }

    totalDisplay.innerHTML = totalCost;
  }
}
