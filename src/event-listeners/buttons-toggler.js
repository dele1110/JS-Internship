import store from '../secondary-functions/store';

const buttonToggler = async () => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (store.view === 'garagePage') {
    if (store.carsPage * 7 < store.carsCount) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    if (store.carsPage > 1) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  } else {
    if (store.winnersPage * 10 < store.winnersCount) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    if (store.winnersPage > 1) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  }
};

export default buttonToggler;
