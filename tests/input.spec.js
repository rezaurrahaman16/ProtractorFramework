

describe('Interact with buttons', () => {

    beforeAll(async () => {
        // console.log(await browser.getCapabilities());
        await browser.get('https://dev.radassist.net/report/1.113654.3.13.1026')
    })
    it('Protractor specific locator', async () => {
        let text = await element(by.buttonText('Save template')).getText()
        console.log(text);
    });

    it('Get Position', async () => {
        // element(by.id())
        let location = await $('#button2').getLocation()
        console.log(location.x);
        console.log(location.y);
    });

    it('Button color', async () => {
        let color = await $('.btn.btn-primary').getCssValue('background-color')
        console.log(color);
    });

    it('Find the height and width', async () => {
        let size = await element(by.buttonText('Submit Button')).getSize()
        console.log(size.height);
        console.log(size.width);
    });
})