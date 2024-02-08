/** Send a sequence of key strokes to an element (clears value before).
 @param {String} page  Page of selector is existed
 @param {String} selector CSS selector
 @param {String} value  User's input value
*/

import { elementSelector } from "../utils/elementSelector.js";
import { checkElement } from "./checkElement.js";

export const setInputValue =  
  async (page, selector, value)=> {
    const elem = await elementSelector(page, selector);
    await checkElement(page, selector,"exists");
    await elem.setValue(value);
   
};
 