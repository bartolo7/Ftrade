import { driver, asserters } from '../configuration/driverConfig';

export const getElementByAccessibilityId = (elementIdentifier, timeout = 5000) =>
  driver.waitForElementByAccessibilityId(elementIdentifier, asserters.isDisplayed, timeout, 1000);

export const getElementsByAccessibilityId = (elementIdentifier, timeout = 5000) =>
  driver.waitForElementsByAccessibilityId(elementIdentifier, asserters.isDisplayed, timeout, 1000);


export const getElementByName = elementIdentifier => driver.waitForElementByName(elementIdentifier, asserters.isDisplayed, 8000, 1000);

export const getElementsByName = elementIdentifier => driver.waitForElementsByName(elementIdentifier, asserters.isDisplayed, 8000, 1000);


export const hideKeyboard = async () => {
  const val = await driver.isKeyboardShown();
  if (val === true) {
    await driver.hideKeyboard();
  }
};

const lib = {
  getElementByAccessibilityId,
  getElementsByAccessibilityId,
  getElementsByName,
  getElementByName,
  hideKeyboard,
};

export { lib };
