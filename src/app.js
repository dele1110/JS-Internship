import render from './rander-page';
import updateState from './update-state';
import pageListeners from './list-of-page-listeners';

const renderApp = async () => {
  await updateState();
  render();
  pageListeners();
};
renderApp();
