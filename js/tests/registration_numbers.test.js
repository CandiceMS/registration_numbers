describe('Add Registration Numbers', function(){

    it('should display the registration number entered in Uppercase', function(){
      var displayOnly = AddRegistrations();
        assert.equal(displayOnly.regUpper('ca1234'), "CA1234");
    });
    // it('should accept registration input as a single OR multi-value string', function(){
    //   var stringInput = AddRegistrations();
    //   //  assert.deepEqual(stringInput.regUpper('ca1234, ca171,ca246'), ["CA1234", "CA171", "CA246"]);
    //     assert.equal(stringInput.regUpper('ca909'), ["CA909"]);
    // });
    it('should capitalise the location regardless of input format', function(){
      var upper = AddRegistrations();
        assert.equal(upper.capitalise("george"), "George");
        assert.equal(upper.capitalise("cAPe toWN"), "Cape Town");
    });
    it('should map the location and registration numbers entered, not repeating any.', function(){
      var addToMap = AddRegistrations();

      addToMap.mapReg(addToMap.regUpper('Ct908'), addToMap.capitalise('Cape'));
      addToMap.mapReg(addToMap.regUpper('bM12'), addToMap.capitalise('CAPE'));
      addToMap.mapReg(addToMap.regUpper('bM12'), addToMap.capitalise('Cape'));
      addToMap.mapReg(addToMap.regUpper('gh385'), addToMap.capitalise('Earth'));


        assert.deepEqual(addToMap.returnMap(), {"Cape": ["CT908", "BM12"], "Earth": ["GH385"]});
    });
    it('should return the location as the map key', function(){
      var locMap = AddRegistrations();

      locMap.returnMap(locMap.mapReg("AZ10", "Earth"));
      locMap.returnMap(locMap.mapReg("ZA10", "Space"));
      locMap.returnMap(locMap.mapReg(true, "Earth"));

      assert.deepEqual(locMap.returnLocation(), ["Earth", "Space"]);
    });
    it('should return the values of all keys in the map', function(){
      var mapVal = AddRegistrations();
      assert.deepEqual(mapVal.regReturn({"Home": ["HM39", "HM93"]}), ['HM39', 'HM93']);
    });
    it('should return the values of a selected map key only', function(){
      var valuesKey = AddRegistrations();
      assert.deepEqual(valuesKey.keyValues({"Away": ["AW56", "AW67", "AW78"], "Far": ["FA34", "FA45"]}, "Away"), ["AW56", "AW67", "AW78"]);
    });
     });
