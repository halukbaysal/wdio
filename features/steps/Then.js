/**
 * @Then steps are used to check the expected behaviour of the action
 */

import { Then, DataTable } from "@wdio/cucumber-framework";
import { checkElement } from "../action/checkElement.js"; 
import { checkTextValue } from "../action/checkTextValue.js";  
import { waitValue } from "../action/waitValue.js";

Then("Take a screenshot", async () => {
  await browser.takeScreenshot();
});

/**
 * This step is used to access the data table and look for the selector state
 *
 * Example syntax
   Then Page element is existed
      | page      | selector     |
      | loginPage | username     |
      | loginPage | password     |
    ## first line is the header of the data table and will be ignored ##
    @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
    @selector css query of the selector
 */

Then("Page element exists", async (table) => {
  table.rows().forEach(async (el) => {
    await checkElement(el[0], el[1],"exists");
  });
});

/**
 * This step is used to access the data table and check the selector's text value is displayed correctly in the UI
 *
 * Example syntax
    Then Page element text value is checked
      | page      | selector     | value          |
      | loginPage | LoginButton  | Login          | 

    ## first line is the header of the data table and will be ignored ##
    @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
    @selector css query of the selector
    @value is the text value which displayed in UI
 */
Then("Page element text value is checked", async (table) => {
  table.rows().forEach(async (el) => {
    await checkTextValue(el[0], el[1], el[2]);
  });
});

/**
 * This step is used to check if the page element's text value is displayed in a given time.
 *
 * For example; the text value of `Processing` element in Scan & Import page will be checked until it is `100%`
 *
 *  @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
    @selector css query of the selector
    @value is the text value which displayed in UI
 * Syntax:
 * Then User waits until "scanImport" "progress" text value is "100%"
 */
Then(
  "User waits until {string} {string} text value is {string}",
  async (page, selector, value) => {
    await waitValue(page, selector, value);
  }
);

/**
 * This step is used to check the text value of the element
 *
 * @page is used for the page of the selector. it could be loginPage, homePage or any existed pages
   @selector css query of the selector
   @value is the text value which displayed in UI
 */
Then(
  "Text value of {string} {string} is {string}",
  async (page, selector, value) => {
    await checkTextValue(page, selector, value);
  }
);

/**This step is used to check if the element exists in the page*/
Then("{string} {string} exists", async(page,selector,)=>{
  await checkElement(page,selector,"exists");
})