import store from '../secondary-functions/store';
import { updCars, updWinners } from '../update-state';
import renderGarage from '../render-garage';
import renderWinners from '../render-winners';
import buttonToggler from './buttons-toggler';
import sortingCardsButtonsListener from './sort-winners-buttons';

const prevNextButtonsListener = async () => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const garage = document.getElementById('garage');
  const winners = document.getElementById('winners');

  prevButton.addEventListener('click', async () => {
    switch (store.view) {
      case 'garagePage': {
        store.carsPage -= 1;
        await updCars();
        garage.innerHTML = renderGarage();
        break;
      }
      case 'winnersPage': {
        store.winnersPage -= 1;
        await updWinners();
        winners.innerHTML = renderWinners();
        break;
      }
      default: throw new Error(`Unexpected view type received: ${store.view}`);
    }
    buttonToggler();
    await sortingCardsButtonsListener();
  });
  nextButton.addEventListener('click', async () => {
    switch (store.view) {
      case 'garagePage': {
        store.carsPage += 1;
        await updCars();
        garage.innerHTML = renderGarage();
        break;
      }
      case 'winnersPage': {
        store.winnersPage += 1;
        await updWinners();
        winners.innerHTML = renderWinners();
        break;
      }
      default: throw new Error(`Unexpected view type received: ${store.view}`);
    }
    buttonToggler();
    await sortingCardsButtonsListener();
  });
};

export default prevNextButtonsListener;
