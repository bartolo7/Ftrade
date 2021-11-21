import { elementUtil } from "../../../utils";

const selectOrderType = async orderType => {
    const element = elementUtil.getElementByAccessibilityId(orderType);
    await element.click();
  };

export default {
    selectOrderType,
};