function AddRegistrations(storageMap) {
  var map = {};
  var reg = "";
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
  function displayReg() {
    return reg;
  }
  return {
    regUpper,
    storeNewMap,
    mapReg,
    returnMap,
    displayReg
  }
}
