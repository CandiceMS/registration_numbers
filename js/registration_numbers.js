function AddRegistrations(storageMap) {
  var reg = '';
  var location = '';
  var map = {};
  function regUpper(regInput) {
    regInput = regInput.replace(/\s+/g, '');
    // the above is a regular expression to remove all whitespace.
     var regUp = regInput.toUpperCase();
     // CODE BELOW DOESNT WORK
     // Return an array with values counted as collective.
    // if (regUp.includes(",")) {
    //   var regSplit = regUp.split(",");
    //   for (var i = 0; i < regSplit.length; i++) {
    //  reg.push(regSplit[i]);
    //}
    // }
    //else {
      reg = regUp;
    //}
      return reg;
    }
  function capitalise(location_Input) {
    var lower = location_Input.toLowerCase();
    if (lower.includes(" ")) {
      var lowerSplit = lower.split(' ');
      var caps = [];
      for (var i = 0; i < lowerSplit.length; i++) {
        caps.push((lowerSplit[i].charAt(0).toUpperCase() + lowerSplit[i].slice(1)));
      }
      location = caps.join(" ");
    }
    else {
      location = lower.charAt(0).toUpperCase() + lower.slice(1);
    }
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
  }
  function returnMap() {
    return map;
  }
  function returnLocation() {
    location = Object.keys(map);
      return location;
  }
  function regReturn(map) {
    for (var key in map) {
      if (map[key]) {
        reg = map[key];
        return reg;
      }
    }
  }
  function keyValues(map, location) {
    var keyValue = map[location];
    return keyValue;
  }
  // NOTES:
    // Object.values(map);
//changes map to an array, removes key name,
//assigns an index instead and returns values

    // Object.is(param1, param2)
//compares params to check if both are the
//same value.
//Returns a boolean value

return {
    regUpper,
    capitalise,
    storeNewMap,
    mapReg,
    returnMap,
    returnLocation,
    regReturn,
    keyValues
  }
}
