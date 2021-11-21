import { elementUtil } from '../../../utils';
import testID from './testID';

const { SCREEN, SELECTOR_LIMIT_ORDER, LIST_LIMIT_ORDER} = testID;

const screen = () => elementUtil.getElementByAccessibilityId(screen);

const selectorLimitOrders = () => elementUtil.getElementByAccessibilityId(SELECTOR_LIMIT_ORDER);

const listOfLimitOrders = () => elementUtil.getElementsByAccessibilityId(LIST_LIMIT_ORDER);


export default {
  screen,
  selectorLimitOrders,
  listOfLimitOrders
};
