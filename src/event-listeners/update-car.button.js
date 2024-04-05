import { updateCar } from '../api';
import { updCars, updWinners } from '../update-state';
import renderGarage from '../render-garage';
import renderWinners from '../render-winners';
import store from '../secondary-functions/store';

const updateSelectedCar = async () => {
  const updateButton = document.getElementById('update-btn');
  updateButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('update-name');
    const color = document.getElementById('update-color');
    const garage = document.getElementById('garage');
    const winners = document.getElementById('winners');

    const car = {
      name: name.value,
      color: color.value,
    };

    if (store.selectedCarID !== null) {
      await updateCar(car, store.selectedCarID);
      await updCars();
      await updWinners();
      winners.innerHTML = renderWinners();
      garage.innerHTML = renderGarage();
    }
    name.disabled = true;
    name.value = '';
    color.disabled = true;
    color.value = '#ffe042';
    updateButton.disabled = true;
    store.selectedCarID = null;
  });
};

export default updateSelectedCar;
