/**
 *Drag and Drop element based on the given selector. 
 This function creates redact to image with the given coordinates
 @param  {String} page  Page of selector is existed
 @param {String} selector CSS selector
 @param {String} targetX X coordinate of the end point
 @param {String} targetY Y coordinate of the end point 
 */
import { elementSelector } from "../utils/elementSelector.js";

export const dragDrop = async (page, selector, targetX, targetY) => {
    const elem = await elementSelector(page, selector); 
    await elem.dragAndDrop({x:targetX,y:targetY})
}