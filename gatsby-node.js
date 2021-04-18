/* eslint-disable no-param-reassign */
exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/exchanges/)) {
    page.matchPath = '/exchanges/*';
    createPage(page);
  } else if (page.path.match(/^\/exchange/)) {
    page.matchPath = '/exchange/*';
    createPage(page);
  }
};
