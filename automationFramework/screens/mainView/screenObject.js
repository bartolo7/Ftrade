import { elementUtil } from "../../../utils";
import testID from "./testID";

const { tab, icon } = testID;

const getTabAccessID = (tabId) => {
  return elementUtil.getElementByAccessibilityId(tabId);
};

const tabFortolio = () => getTabAccessID(tab.FORTFOLIO);
const tabInsights = () => getTabAccessID(tab.INSIGHTS);
const tabDiscover = () => getTabAccessID(tab.DISCOVER);
const tabActivity = () => getTabAccessID(tab.ACTIVITY);
const tabAccount = () => getTabAccessID(tab.ACCOUNT);
const iconProfile = () => elementUtil.getElementByAccessibilityId(icon.PROFILE);


export default {
 tabAccount,
 tabActivity,
 tabDiscover,
 tabInsights,
 tabFortolio,
 iconProfile
};
