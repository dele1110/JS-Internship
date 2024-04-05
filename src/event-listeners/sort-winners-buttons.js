import store from '../secondary-functions/store';
import { updWinners } from '../update-state';
import renderWinners from '../render-winners';

export const toggleCarsSortOrder = () => {
  store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
};

const sortingCardsButtonsListener = async () => {
  const sortByWins = document.getElementById('sort-by-wins');
  const sortByTime = document.getElementById('sort-by-time');
  const winners = document.getElementById('winners');

  sortByWins.addEventListener('click', async () => {
    store.sortBy = 'wins';
    toggleCarsSortOrder();
    await updWinners();
    winners.innerHTML = renderWinners();
    await sortingCardsButtonsListener();
  });
  sortByTime.addEventListener('click', async () => {
    store.sortBy = 'time';
    toggleCarsSortOrder();
    await updWinners();
    winners.innerHTML = renderWinners();
    await sortingCardsButtonsListener();
  });
};

export default sortingCardsButtonsListener;
