import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesArr = (categoriesArr) => {
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ARR, categoriesArr);
};
