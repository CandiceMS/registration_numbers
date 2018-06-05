var regInput = document.querySelector('.regInput');
var regBtn = document.querySelector('button[name="RegBtn"]');
//var regDisplay = document.querySelector('.displayNone');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var moreReg = document.querySelectorAll('div[class="row"]');
   var addLocation = moreReg[4];

function add() {
  addReg.mapReg(addReg.regUpper(regInput.value));
  regInput.value = "";
  addReg.displayReg(addReg.returnMap());

  var data = addReg.displayReg(addReg.returnMap());
  for (var i = 0; i < data.length; i++) {
      var createOutput = document.createElement('output');
      addLocation.appendChild(createOutput);
      createOutput.classList.add("col-3", "center", "display_Reg");
      createOutput.innerHTML = data[i];

       // if (createOutput.innerHTML !== data[i]) {
       //   createOutput.innerHTML = data[i];
       // }
    }
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
