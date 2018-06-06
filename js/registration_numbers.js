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
  // function displayReg() {
  //   //return reg;
  //   mapArray = Object.keys(map);
  //   return mapArray;
  // }
  function regReturn() {
    return reg;
  }

  return {
    regUpper,
    storeNewMap,
    mapReg,
    returnMap,
  //  displayReg,
    regReturn
  }
}
