import { Selector } from 'testcafe';

export default class PizzaConfigurationModel {
    constructor() {
        this.sizeSliderHandle = Selector('.noUi-handle');
        this.nextButtonInStep1 = Selector('.next-step');
        this.pepperoniTopping = Selector('label[for="pepperoni"]');
        this.nextButtonInStep2 = Selector('#step2 .next-step');
        this.addressInput = Selector('#address');
        this.phoneInput = Selector('#phone-input');
        this.nextButtonInStep3 = Selector('#step3 .next-step');
        this.iframeMap = Selector('.restaurant-location iframe');
        this.zoomInButton = Selector('button[title="Zoom in"]');
        this.completeOrderButton = Selector('.complete-order');
        this.sizeResult = Selector('.pizza-size-result')
        this.toppingResult = Selector('.checked-toppings')
        this.addressResult = Selector('.address-result')
        this.phoneResult = Selector('.phone-result')
    }
}
