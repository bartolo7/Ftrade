import { elementUtil } from '../../../utils';
import testID from './testID';

const { SCREEN, input, lists} = testID;

const screen = () => elementUtil.getElementByAccessibilityId(SCREEN);

const txtInputSearch = () => elementUtil.getElementByAccessibilityId(input);

const listSearchItem = () =>
  elementUtil.getElementsByAccessibilityId(lists, 12000);

export default {
  screen,
  txtInputSearch,
  listSearchItem
};
