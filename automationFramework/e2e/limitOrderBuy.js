import { driver } from "../../configurations/driverConfig";
import {search, menu, buyView, instrumentView, buyActions  } from "../screens";
import { user, api } from "../../utils";
import { selectSearchItem, verifyOrderInApi, verifyOrderInUI } from "../reusableActions";

const { user1 } = user;

let order ={ 
  stock: "Barclays",
  ticker: "BARC",
  quantity: 2,
  amount: "",
  accno: "12345678",
  type:"LIMIT_BUY"
}


describe("Buy limit order for Barclays to search tab", () => {
  beforeAll(async () => {
    await driver.launchApp();

    //api call to delete all order for the user

  });

  it(`Verify Limit order purchase: ${user1.name}`, async () => {
     
    await api.postLogin(user1.name, user1.password);

    await api.postDepositToAccount(order.accno, "500");

    await menu.tabDiscover().click();

    await search.screen().isVisible();

    await search.txtInputSearch().setImmediateValue(order.ticker);

    await driver.hideDeviceKeyboard();
    
    await selectSearchItem(0);

    await instrumentView.screen().isVisible();

    //const lblStock =  await instrumentView.lblStockName().getValue(); //? maybe in two steps
    
    //expect(lblStock).toContain(order.stock);

    await instrumentView.btnBuy().click();

    await buyView.screen().isVisible();

    await buyActions.selectOrderType(buyView.ORDER_TYPES.LIMIT_ORDER);

    await buyView.txtBuyPrice().click();

    const sharePrice = await api.getInstrumentPrice(order.amount);

    order.amount = Math.round(sharePrice.price  * 1.1)

    await buyView.txtBuyPrice().clear().sendKeys(order.amount);

    await buyView.btnContinue().click();

    await buyView.txtTotalNumberOfShare().clear().sendKeys(order.quantity);

    await buyView.btnReviewOrder().click();

    //assert labels could be an option although will add more interaction with the UI

    await buyView.btnCreateBuyLimit().click();

    await api.postPassword();

    // Verify that order is created, maybe get values from API and verify in the UI 
    await verifyOrderInApi(order.type, order.amount, order.accno);

    await verifyOrderInUI();

    await buyView.btnOrderDone().click();

  })


  afterAll(async () => {});
});
