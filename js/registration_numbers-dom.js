var regInput = document.querySelector('input[name="RegInput"]');
var locationInput = document.querySelector('input[name="LocationInput"]');
var addBtn = document.querySelector('button[name="AddBtn"]');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var locateBtn = document.querySelector('.locateBtn');
var selectFilter = document.querySelector('.locationsAdd');
var moreReg = document.querySelector('div[class="row divDisplay"]');

function displayFilter() {

  // locationList.value = map.key
  // regInput.value = map.key-value

  regInput.value = "";
  locationInput.value = "";
}

function add() {
  addReg.mapReg(addReg.regUpper(regInput.value), addReg.capitalise(locationInput.value));
  regInput.value = "";
  locationInput.value = "";
  addReg.returnMap();

  var holdMap = addReg.returnMap();
  localStorage.setItem("localMap", JSON.stringify(holdMap));

    var createOutput = document.createElement('output');
    moreReg.appendChild(createOutput);
    createOutput.classList.add("col-3", "center", "display_Reg");
    createOutput.innerHTML = ;
  }

  var holdArr = Object.keys(holdMap);
  for (var i = 0; i < holdArr.length; i++) {
    var createLI = document.createElement('li');
    selectFilter.appendChild(createLI);
    var createItem = document.createElement('input');
    createLI.appendChild(createItem);
    createItem.setAttribute("type", "button"), ("name", "location");
    createItem.value = holdArr[i];
}


var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};

var addReg = AddRegistrations(holdMap);
addReg.storeNewMap();




function reset() {
  localStorage.clear();
  location.reload();
}
addBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
//locateBtn.addEventListener('click', displayOutput);
// eventListener for location created to display reg
