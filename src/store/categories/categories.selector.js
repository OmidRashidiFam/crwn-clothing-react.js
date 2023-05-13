import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCategoriesArr = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoriesArr
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArr],
  (categoriesArr) => {
    return categoriesArr.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
