/**
 * Wait for an element (selected by css selector)
 * for the provided amount of milliseconds to be present within the DOM.
 @param  {String} page  Page of selector is existed
 @param  {String} selector  CSS selector
 @param  {String} isReverse  Boolean - if true it waits for the opposite (default: false)
 @param  {String} wait  Time in ms (default: 500)
 */

import { timeouts } from "../utils/timeouts.js";
import { elementSelector } from "../utils/elementSelector.js";

export const checkElement = async (page, selector, waitFor, isReverse = false, wait = timeouts.WAIT_TIME) => {
  const elem = await elementSelector(page, selector);
  if (waitFor == "exists")
    await elem.waitForExist({ timeout: wait, reverse: isReverse });
  else if (waitFor == "clickable")
    await elem.waitForClickable({ timeout: wait, reverse: isReverse });
} 


