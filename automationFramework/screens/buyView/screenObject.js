import { elementUtil } from '../../../utils';
import testID from './testID';

const { SCREEN, button, label, input} = testID;

const screen = () => elementUtil.getElementByAccessibilityId(SCREEN);

const btnContinue = ()  => elementUtil.getElementByAccessibilityId(button.CONTINUE);

const btnReviewOrder = ()  => elementUtil.getElementByAccessibilityId(button.REVIEW_ORDER);

const btnCancel = () => elementUtil.getElementByAccessibilityId(button.CANCEL);

const btnOrderType = () => elementUtil.getElementByAccessibilityId(button.SELECT_ORDER_TYPE);

const btnCreateBuyLimit = () => elementUtil.getElementByAccessibilityId(button.CREATE_BUY_LIMIT);

const btnCreateSellLimit = () => elementUtil.getElementByAccessibilityId(button.CREATE_SELL_LIMIT);

const btnOrderDone = () => elementUtil.getElementByAccessibilityId(button.CREATE_SELL_LIMIT);

const lblStockName = () => elementUtil.getElementByAccessibilityId(label.STOCK_NAME);

const lblNumberOfShares = () => elementUtil.getElementByAccessibilityId(label.NUMBER_OF_SHARES);

const txtBuyPrice = () => elementUtil.getElementByAccessibilityId(input.BUY_PRICE);

const txtTotalNumberOfShare = () => elementUtil.getElementByAccessibilityId(input.BUY_PRICE);

const ORDER_TYPES = {
  INSTANT_ORDER: 'INSTANT_ORDER',
  LIMIT_ORDER: 'LIMIT_ORDER',
  TRIGGERED_ORDER: 'TRIGGERED_ORDER'
};



export default {
  screen,
  lblStockName,
  lblNumberOfShares,
  btnCancel,
  btnReviewOrder,
  txtBuyPrice,
  btnOrderType,
  txtTotalNumberOfShare,
  btnContinue,
  btnCreateBuyLimit,
  btnCreateSellLimit,
  btnOrderDone,
  ORDER_TYPES
};
