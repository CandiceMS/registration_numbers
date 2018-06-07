var regInput = document.querySelector('.regInput');
var locationInput = document.querySelector('input[name="LocationInput"]');
var regBtn = document.querySelector('button[name="RegBtn"]');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var locateBtn = document.querySelector('.locateBtn');
var selectFilter = document.querySelector('.locationList');
var moreReg = document.querySelectorAll('div[class="row"]');
var addLocation = moreReg[moreReg.length - 1]; //moreReg[6];

function add() {
  // locationList.value = map.key
  // regInput.value = map.key-value

  regInput.value = "";
  locationInput.value = "";

  var createUL = document.createElement('ul');
  selectFilter.appendChild(createUL);
  var createLI = createUL.createElement('li');
//  createUL.appendChild(createLI);
  var createItem = createLI.createElement('input');
//  createLI.appendChild(createItem);
  createItem.setAttribute("type", "button"), ("name", "location");
//  createItem.value = ; // map.key
}

function displayOutput() {
  addReg.mapReg(addReg.regUpper(regInput.value));
  regInput.value = "";
  locationInput.value = "";
  addReg.returnMap();
  var createOutput = document.createElement('output');
  addLocation.appendChild(createOutput);
  createOutput.classList.add("col-3", "center", "display_Reg");
  createOutput.innerHTML = addReg.regReturn(); // And location font 10px




  var holdMap = addReg.returnMap();
  localStorage.setItem("localMap", JSON.stringify(holdMap));
}


var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};

var addReg = AddRegistrations(holdMap);
addReg.storeNewMap();




function reset() {
  localStorage.clear();
  location.reload();
}
regBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
locateBtn.addEventListener('click', displayOutput);
// eventListener for location created to display reg
