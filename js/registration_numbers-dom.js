var regInput = document.querySelector('.regInput');
var regBtn = document.querySelector('button[name="RegBtn"]');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var moreReg = document.querySelectorAll('div[class="row"]');
var addLocation = moreReg[4];

function add() {
  addReg.mapReg(addReg.regUpper(regInput.value));
  regInput.value = "";
  addReg.returnMap();

  var createOutput = document.createElement('output');
  addLocation.appendChild(createOutput);
  createOutput.classList.add("col-3", "center", "display_Reg");
  createOutput.innerHTML = addReg.regReturn();

  var holdMap = addReg.returnMap();
  localStorage.setItem("localMap", JSON.stringify(holdMap));
}

var holdMap = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')) : {};

var addReg = AddRegistrations(holdMap);
addReg.storeNewMap();

function reset() {
  localStorage.clear();
  location.reload();
}


regBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
