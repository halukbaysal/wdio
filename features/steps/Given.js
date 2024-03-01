/**
 * @Given steps are used for initial steps of the test scenario
 */
 

import { Given } from "@wdio/cucumber-framework";

Given("User navigates to login page", async () => {
     await browser.url("/");
  });