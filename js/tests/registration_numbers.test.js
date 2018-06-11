describe('Add Registration Numbers', function(){

    it('should display the registration number entered in Uppercase', function(){
      var displayOnly = AddRegistrations();
        assert.equal(displayOnly.regUpper('ca1234'), "CA1234");
    });
    it('should capitalise the location regardless of input format', function(){
      var upper = AddRegistrations();
        assert.equal(upper.capitalise("george"), "George");
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
     });
