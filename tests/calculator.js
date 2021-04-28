
describe('demo calculator test', function(){

it('addition test', function(){

    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys('2');
    
        element(by.model('second')).sendKeys('3');
    
        element(by.css('[ng-click="doAddition()"]')).click();
    
        element(by.cssContainingText('ng-click="doAddition()"', '5'));


    

    browser.sleep(3000)

});



});