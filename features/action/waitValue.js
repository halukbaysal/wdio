/**
 * It expects a condition and waits until that condition is fulfilled with a truthy value.
 @param {String} page  Page of selector is existed
 @param {String} selector CSS selector
 @param {String} value  Input value
 */ 

import { timeouts } from "../utils/timeouts.js";
import { elementSelector } from "../utils/elementSelector.js";

export const waitValue =  
  async  (page, selector, value, wait = timeouts.WAIT_FOR_LOAD)=> {
    const elem = await elementSelector(page, selector);
    await elem.waitUntil(
      async function () {
        return (await this.getText()) === value;
      },
      {
        timeout: wait,
        timeoutMsg: `expected text to be different after ${wait}`,
      }
    );
  };
  
