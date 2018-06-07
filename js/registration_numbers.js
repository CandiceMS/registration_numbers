function AddRegistrations(storageMap) {
  var reg = "";
  var location = "";
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
  function mapReg(reg, location) {
    storeNewMap();
    map = {
      location: [reg]
    }
    if (reg == "" || location == "") {
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

return {
    regUpper,
    storeNewMap,
    mapReg,
    returnMap,
    regReturn
  }
}
