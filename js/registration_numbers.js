function AddRegistrations(storageMap) {
  var reg = "";
  var location = "";
  var map = {};
  var mapArray = [];
  function regUpper(regInput) {
    reg = regInput.toUpperCase();
    return reg;
  }
  function capitalise(location_Input) {
    //var locationLower = location_Input.toLowerCase();
    //location = locationLower[0].toUpperCase();
    location = location_Input.toLowerCase();
    return location;
  }
  function storeNewMap() {
    if (storageMap) {
      map = storageMap;
    }
  }
  function mapReg(reg, location) {
    storeNewMap();
    if (reg == "" || location == "") {
      return;
    }
    // var regSplit = [];
    // if (reg.length > 1) {
    //   var regTrim = reg.trim();
    //   regSplit = regTrim.split(",")
    // }    
    if (map[location] === undefined) {
      map[location] = [reg];
    }
    if (map[location] === location || map[location].includes(reg)) {
      return;
    }
    else {
      map[location].push(reg);
    }
    console.log(map);
  }
  function returnMap() {
    return map;
  }
  function returnLocation() {
    return location;
  }
  function regReturn() {
    return reg;
  }

return {
    regUpper,
    capitalise,
    storeNewMap,
    mapReg,
    returnMap,
    returnLocation,
    regReturn
  }
}
