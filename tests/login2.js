describe('login page', function() {
    browser.driver.get('https://dev.radassist.net/');
    
    it('should sign in', function() {

      // Find page elements
      var userNameField = browser.driver.findElement(By.id('username'));
      var userPassField = browser.driver.findElement(By.id('password'));
      var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));

      // Fill input fields
      userNameField.sendKeys('admin');
      userPassField.sendKeys('admin');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('admin');
      expect(userPassField.getAttribute('value')).toEqual('admin');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/success');
      }, 10000);
    });
});