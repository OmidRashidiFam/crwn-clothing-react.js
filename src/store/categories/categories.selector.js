export const selectCategoriesMap = (state) => {
  return state.categories.categoriesArr.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
