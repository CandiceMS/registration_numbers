var regInput = document.querySelector('input[name="RegInput"]');
var locationInput = document.querySelector('input[name="LocationInput"]');
var addBtn = document.querySelector('button[name="AddBtn"]');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var locateBtn = document.querySelector('.locateBtn');
var selectFilter = document.querySelector('.locationsAdd');
var moreReg = document.querySelector('div[class="row divDisplay"]');
var createOutput = "";

function filterLocation(e) {
  if (e) {
    var targetEl =  e.target;
    var elValue = targetEl.value;
  // console.log(targetEl);
  // console.log(elValue);
  var locationReg = holdMap[elValue];
  console.log(locationReg);
  while (moreReg.hasChildNodes()) {
    moreReg.removeChild(moreReg.firstChild);
  }
  for (var i = 0; i < locationReg.length; i++) {
    createOutput = document.createElement('output');
    moreReg.appendChild(createOutput);
    createOutput.classList.add('col-3', 'center', 'filtered');
    createOutput.innerHTML = locationReg[i];
    }
  }
}

function add() {
  while (selectFilter.hasChildNodes()) {
    selectFilter.removeChild(selectFilter.firstChild);
  }
  while (moreReg.hasChildNodes()) {
    moreReg.removeChild(moreReg.firstChild);
  }

  addReg.mapReg(addReg.regUpper(regInput.value), addReg.capitalise(locationInput.value));
  regInput.value = "";
  locationInput.value = "";
  addReg.returnMap();

  var holdMap = addReg.returnMap();
  localStorage.setItem("localMap", JSON.stringify(holdMap));

  var keyArr = addReg.returnLocation(holdMap);
    for (var i = 0; i < keyArr.length; i++) {
      var createLI = document.createElement('li');
      var createItem = document.createElement('input');
      selectFilter.appendChild(createLI);
      createLI.appendChild(createItem);
      createItem.setAttribute("type", "button"), ("name", "location");
      createItem.value = keyArr[i];
    }

  var valObj = addReg.returnMap(holdMap);
  var valArr = [];
  for (var key in valObj) {
    if (valObj[key]){
      valArr = valObj[key].valueOf();
      for (var i = 0; i < valArr.length; i++) {
        createOutput = document.createElement('output');
        moreReg.appendChild(createOutput);
        createOutput.classList.add("col-3", "center", "display_Reg");
        createOutput.innerHTML = valArr[i];
      }
    }
  }
}
var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};

var addReg = AddRegistrations(holdMap);
addReg.storeNewMap();
add(holdMap);

function reset() {
  localStorage.clear();
  location.reload();
}
addBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
selectFilter.addEventListener('click', filterLocation);
