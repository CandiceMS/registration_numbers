describe('Add Registration Numbers', function(){

    it('should display the registration number entered in Uppercase', function(){
      var displayOnly = AddRegistrations();
      displayOnly.regUpper('ca1234');
        assert.equal(displayOnly.displayReg(), "CA1234");
    });
    it('should display the registration number entered in Uppercase', function(){
      var display = AddRegistrations();
        assert.equal(display.displayReg(display.regUpper('cB1234')), "CB1234");
    });
    it('should map the registration numbers entered, not repeating any.', function(){
      var mapRegistrations = AddRegistrations();

      mapRegistrations.mapReg(mapRegistrations.regUpper('Ct908'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('bM12'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('cb759'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('cb759'));
      mapRegistrations.mapReg(mapRegistrations.regUpper('cb759'));
      
        assert.deepEqual(mapRegistrations.returnMap(), {"CT908":0, "BM12":0, "CB759":0});
    });

     });
