var regInput = document.querySelector('.regInput');
var regBtn = document.querySelector('button[name="RegBtn"]');
//var regDisplay = document.querySelector('.displayNone');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var output = document.createElement('output');
var moreReg = document.querySelectorAll('div[class="row"]');
   var addLocation = moreReg[4];

function add() {
  addReg.mapReg(addReg.regUpper(regInput.value));
//  regDisplay.innerHTML = addReg.displayReg(addReg.returnMap());
//  regDisplay.classList.add("col-3", "center");
//  regInput.value = "";
  regInput.value = "";

  if (addReg.mapReg()) {
    addLocation.appendChild(output);
    output.classList.add("col-3", "center");
    output.innerHTML = addReg.displayReg(addReg.returnMap());
  }
   // if (regDisplay.innerHTML = addReg.displayReg()) {
   //   addLocation.appendChild(output);
   // //  moreOutput.innerHTML = addReg.displayReg();
   //   output.classList.add("col-3", "center");
   // }

  var holdMap = addReg.returnMap();
   localStorage.setItem("localMap",JSON.stringify(holdMap));
 }

 var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};
 // Note: Line above and line below does the same thing.
 // var holdMap = JSON.parse(localStorage.getItem('localMap'));
 //   if (holdMap === undefined || null) {
 //     holdMap = {};
 //   }
var addReg = AddRegistrations(holdMap);

   addReg.storeNewMap();
//   regDisplay.innerHTML = addReg.displayReg();

   function reset() {
     localStorage.clear();
     location.reload();
   }


regBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
