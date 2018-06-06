function AddRegistrations(storageMap) {
  var reg = "";
  var map = {};
  var mapArray = [];
  function regUpper(regInput) {
    reg = regInput.toUpperCase();
    return reg;
  }
  function storeNewMap() {
    if (storageMap) {
      map = storageMap;
    }
  }
  function mapReg(reg) {
    storeNewMap();
    if (reg == "") {
      return;
    }
    if (map[reg] === undefined) {
      map[reg] = 0;
    }
    for (var reg in map) {
      if (map[reg] !== reg) {
        map[reg] = 0;
      }
    }
    console.log(map);
  }
  function returnMap() {
    return map;
  }
  function regReturn() {
    return reg;
  }
  function findLocation(locationSelected, map) {
  switch(locationSelected) {
    case "Cape Town":
      return reg.includes("CA");
    case "Port Elizabeth":
      return reg.includes("CB");
    case "Gauteng":
      return reg.includes("GP");
    case "Kwazulu Natal":
      return reg.includes("ZN");
        break;
    default:
      return "No Registrations Found";
    }
  }

return {
    regUpper,
    storeNewMap,
    mapReg,
    returnMap,
    regReturn,
    findLocation
  }
}
