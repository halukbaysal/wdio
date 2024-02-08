/**
 * Checks if element has a specific text. Can also be called with an array as parameter in the case where the element can have different texts.
 @param  {String} page  Page of selector is existed
 @param  {String} selector  CSS selector
 @param  {String} value  Text value of the element which is displayed in UI
 */

import { elementSelector } from "../utils/elementSelector.js";

export const checkTextValue =
  async (page, selector, expected) => {
    const actual = await elementSelector(page, selector);
    await expect(actual).toHaveText(expected);
  };

