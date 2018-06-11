describe('Add Registration Numbers', function(){

    it('should display the registration number entered in Uppercase', function(){
      var displayOnly = AddRegistrations();
      displayOnly.regUpper('ca1234');
        assert.equal(displayOnly.regReturn(), "CA1234");
    });
    it('should capitalise the location regardless of input format', function(){
      var upper = AddRegistrations();
      upper.capitalise("george");
        assert.equal(upper.returnLocation(), "George");
    });
    it('should map the location and registration numbers entered, not repeating any.', function(){
      var addToMap = AddRegistrations();

      addToMap.mapReg(addToMap.regUpper('Ct908'), addToMap.capitalise('Cape'));
      addToMap.mapReg(addToMap.regUpper('bM12'), addToMap.capitalise('CAPE'));
      addToMap.mapReg(addToMap.regUpper('bM12'), addToMap.capitalise('Cape'));
      addToMap.mapReg(addToMap.regUpper('gh385'), addToMap.capitalise('Earth'));

        assert.deepEqual(addToMap.returnMap(), {"Cape": ["CT908", "BM12"], "Earth": ["GH385"]});
    });
     });
