import { elementUtil } from '../../../utils';
import testID from './testID';

const { SCREEN, button, label} = testID;

const screen = () => elementUtil.getElementByAccessibilityId(SCREEN);

const btnBuy = ()  => elementUtil.getElementByAccessibilityId(button.BUY);

const btnSell = () => elementUtil.getElementByAccessibilityId(button.SELL);

const btnBack = () => elementUtil.getElementByAccessibilityId(button.BACK);

const lblStockName = () => elementUtil.getElementByAccessibilityId(label.STOCK_NAME);

const lblStockPrice= () => elementUtil.getElementByAccessibilityId(label.STOCK_PRICE);

export default {
  screen,
  btnBuy,
  btnSell,
  btnBack,
  lblStockName,
  lblStockPrice
};
