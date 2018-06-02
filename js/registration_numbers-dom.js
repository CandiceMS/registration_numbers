var regInput = document.querySelector('.regInput');
var regBtn = document.querySelector('button[name="RegBtn"]');
var regDisplay = document.querySelector('.regDisplay');
var clearBtn = document.querySelector('button[name="clearBtn"]');

var addReg = AddRegistrations(holdMap);

function add() {
//  addReg.regUpper(regInput.value);
  addReg.mapReg(addReg.regUpper(regInput.value));
  regDisplay.innerHTML = addReg.displayReg();
  regInput.value = "";

  var holdMap = addReg.returnMap();
   localStorage.setItem("localMap",JSON.stringify(holdMap));
 }

 //var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};
 // Note: Line above and line below does the same thing.
 var holdMap = JSON.parse(localStorage.getItem('localMap'));
   if (holdMap === undefined || null) {
     holdMap = {};
   }

   addReg.storeNewMap();

   function reset() {
     localStorage.clear();
     location.reload();
   }


regBtn.addEventListener('click', add);
clearBtn.addEventListener('click', reset);
