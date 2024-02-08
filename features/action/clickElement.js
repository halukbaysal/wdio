/**
 *Click on an element based on the given selector
 @param  {String} page  Page of selector is existed
 @param {String} selector CSS selector
 * If it matches with more than one DOM-element it automatically clicks on the first element
 */
import { elementSelector } from "../utils/elementSelector.js";
import { checkElement } from "./checkElement.js";
 

export const clickElement = async(page,selector)=> {   
    const elem = await elementSelector(page, selector);
    await checkElement(page, selector,"exists");
    await elem.click();   
};
 
