describe('Add Registration Numbers', function(){

    it('should display the registration number entered in Uppercase', function(){
      var displayOnly = AddRegistrations();
      displayOnly.regUpper('ca1234');
        assert.equal(displayOnly.regReturn(), "CA1234");
    });
    it('should display the registration number entered in Uppercase', function(){
      var display = AddRegistrations();
        assert.equal(display.regReturn(display.regUpper('cB1234')), "CB1234");
    });
    it('should map the location and registration numbers entered, not repeating any.', function(){
      var mapRegistrations = AddRegistrations();

      mapRegistrations.mapReg(mapRegistrations.regUpper('Ct908'), mapRegistrations.capitalise('Cape'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('bM12'), mapRegistrations.capitalise('CAPE'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('bM12'), mapRegistrations.capitalise('Cape'));
        mapRegistrations.mapReg(mapRegistrations.regUpper('gh385'), mapRegistrations.capitalise('Earth'));


        assert.deepEqual(mapRegistrations.returnMap(), {"cape": ["CT908", "BM12"], "earth": ["GH385"]});
    });
     });
