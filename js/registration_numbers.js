function AddRegistrations(storageMap) {
  var reg = [];
  var location = '';
  var map = {};
  function regUpper(regInput) {
    reg = regInput.toUpperCase();
    return reg;
  }
  function capitalise(location_Input) {
    var lower = location_Input.toLowerCase();
    location = lower.charAt(0).toUpperCase() + lower.slice(1);
    //how to use a forEach()???
    //how to avoid loop?
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
    location = Object.keys(map);
    //console.log(location);
    return location;
  }
  function regReturn(map) {
  //  var regArr = [];
    for (var key in map) {
      if (map[key]) {
        reg = map[key];
        return reg;
      }
    }

//    console.log(map[key].valueOf());
  // for (var key in map) {
  //   if (map[key]) {
  //     reg = map[key].valueOf();
  //   }
  //   console.log(map[key].valueOf());
  //     return reg;
  //
  //  }
    //return reg;
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
