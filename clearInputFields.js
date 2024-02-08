/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 @param  {String} page  Page of selector is existed
 @param  {String} selector  CSS selector
 */

import { elementSelector } from "../utils/elementSelector.js";

export const clearInputFields =
  async (page, selector) => {
    const elem = await elementSelector(page, selector);
    await elem.clearValue();
  };

