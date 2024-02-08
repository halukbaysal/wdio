import { loginPage } from "../selectors/loginPage.js";

export const elementSelector = async (page, selector) => {
  const elem =
    selector != null
      ? await $(eval(`${page}.${selector}`))
      : await $(page);
  return elem;

};

