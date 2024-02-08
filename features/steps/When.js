/**
 * @When steps are used for the user actions or an event. It could be user action or event that triggered after a action
 */

import pkg from "robotjs";
import { When } from "@wdio/cucumber-framework";
import { clickElement } from "../action/clickElement.js";
import { checkElement } from "../action/checkElement.js";
import { setInputValue } from "../action/setValue.js";
import { dragDrop } from "../action/dragDrop.js";
const { typeString, keyTap } = pkg


/**
 * This step will be used to click any element on the application
 * @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
   @selector css query of the selector

  >Example syntax
   When User clicks "loginPage" "nextButton"
*/
When("User clicks {string} {string}", async (page, selector) => {
  await checkElement(page, selector, "clickable");
  await clickElement(page, selector);
});

/**
 * This step is used to enter text value into <Input> or <TextField>
 * @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
   @selector css query of the selector

  >Example syntax
   When User enters "TenantName" into "loginPage" "tenantName"
*/
When(
  "User enters {string} into {string} {string}",
  async (value, page, selector) => {
    await setInputValue(page, selector, value);
  }
);

/**
 * This step is used to upload a file
 * @filename is the name of the file which will be used for testing
 *
 * Example syntax
 * User uploads "CorpSource_3A-p1.tif" file
*/
When("User uploads {string} file", async (fileName) => {
  const filePath = `${fileName}`;
  pkg.typeString(filePath);
  pkg.keyTap("enter");
});
 

/**
 * This step is used to redact on image
 * 
 * Example syntax
 * User redacts "annotatePage" "image" to 100 150 
 */
When("User redacts {string} {string} to {int} {int}", async (page, selector, targetX, targetY) => {
  await dragDrop(page, selector, targetX, targetY);
});