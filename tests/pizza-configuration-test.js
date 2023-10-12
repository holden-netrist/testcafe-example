import PizzaConfigurationModel from './page-models/pizza-configuration-model';

const pageModel = new PizzaConfigurationModel();
const url = 'https://testcafe-demo-page.glitch.me/';

fixture `Pizza Configuration Test`
    .page(url);

//Demos a successful test case
test('12in Pepperoni Pizza', async t => {
    const address = '90 Church St.';
    const phoneNumber = '+1-541-754-3001';
    await t

        // slow test down for viewing purposes
        // .setTestSpeed(0.5)

        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)

        // drag the pizza size slider
        .drag(pageModel.sizeSliderHandle, 100, 0)

        // select the toppings
        .click(pageModel.nextButtonInStep1)
        .click(pageModel.pepperoniTopping)
        .click(pageModel.nextButtonInStep2)

        // fill the address form
        .typeText(pageModel.addressInput, address)
        .typeText(pageModel.phoneInput, phoneNumber)
        .click(pageModel.nextButtonInStep3)

        // zoom into the iframe map
        .switchToIframe(pageModel.iframeMap)
        .click(pageModel.zoomInButton)

        // assert order correct
        .switchToMainWindow()
        .expect(pageModel.sizeResult.innerText).contains('12')
        .expect(pageModel.toppingResult.innerText).contains('pepperoni')
        .expect(pageModel.addressResult.innerText).contains(address)
        .expect(pageModel.phoneResult.innerText).contains(phoneNumber)

        // submit order
        .click(pageModel.completeOrderButton);
});

//Demos a failed test case
test('14in Pepperoni Pizza', async t => {
    const address = '90 Church St.';
    const phoneNumber = '+1-541-754-3001';
    await t

        // slow test down for viewing purposes
        // .setTestSpeed(0.5)

        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)

        // drag the pizza size slider
        .drag(pageModel.sizeSliderHandle, 100, 0)

        // select the toppings
        .click(pageModel.nextButtonInStep1)
        .click(pageModel.pepperoniTopping)
        .click(pageModel.nextButtonInStep2)

        // fill the address form
        .typeText(pageModel.addressInput, address)
        .typeText(pageModel.phoneInput, phoneNumber)
        .click(pageModel.nextButtonInStep3)

        // zoom into the iframe map
        .switchToIframe(pageModel.iframeMap)
        .click(pageModel.zoomInButton)

        // assert order correct
        .switchToMainWindow()
        .expect(pageModel.sizeResult.innerText).contains('14')
        .expect(pageModel.toppingResult.innerText).contains('pepperoni')
        .expect(pageModel.addressResult.innerText).contains(address)
        .expect(pageModel.phoneResult.innerText).contains(phoneNumber)

        // submit order
        .click(pageModel.completeOrderButton);
});