describe("login module", function(){
	it("should login succesfully using auth0", function(){
    	//set window size and navigate to the path where the template is loaded
        browser.driver.manage().window().setSize(1500, 1000);
		browser.driver.get(browser.baseUrl + 'https://dev.radassist.net/');
        
        //check if login button is present & visible
        var loginButtonExists = by.id('kc-login');			
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(loginButtonExists); 
		}, 5000);
		var loginButton = element(by.id('kc-login'));
		loginButton.click();
        
        //check if email field exists to see if the pop-up has been succesfully loaded
		var emailFieldExists = by.id('username');
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(emailFieldExists); 
		}, 5000);
		//wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
		browser.driver.sleep(2000);
        
        //type credentials and click the 'access' button to log in
		var emailField = element(by.id('username'));
		emailField.sendKeys('admin');
		var passWordField = element(by.id('password'));
		passWordField.sendKeys('admin');
		var accessButton = element(by.css('.a0-notloggedin .a0-primary'));
		accessButton.click();
        
        //verify that the login was succesfull by checking if the logout button is displayed
		var logoutButtonExists = by.id('logoutButton');			
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(logoutButtonExists); 
		}, 5000);
    });
});