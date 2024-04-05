import store from '../secondary-functions/store';
import {
  getCar, deleteCar, getWinner, deleteWinner,
} from '../api';
import { updWinners, updCars } from '../update-state';
import renderGarage from '../render-garage';
import renderWinners from '../render-winners';
import startDriving from '../secondary-functions/start-driving';
import stopDriving from '../secondary-functions/stop-driving';

const carControlsListener = async () => {
  const updateName = document.getElementById('update-name');
  const updateColor = document.getElementById('update-color');
  const updateButton = document.getElementById('update-btn');
  const garage = document.getElementById('garage');
  const winners = document.getElementById('winners');

  document.getElementById('garage').addEventListener('click', async (e) => {
    if (e.target.classList.contains('select-btn')) {
      const selectedCar = await getCar(Number(e.target.id.split('select-car-')[1]));
      store.selectedCarID = selectedCar.id;
      updateName.value = selectedCar.name;
      updateColor.value = selectedCar.color;
      updateName.disabled = false;
      updateColor.disabled = false;
      updateButton.disabled = false;
    }
    if (e.target.classList.contains('remove-btn')) {
      const id = Number(e.target.id.split('remove-car-')[1]);
      await deleteCar(id);
      if (await getWinner(id)) {
        await deleteWinner(id);
        await updWinners();
        winners.innerHTML = renderWinners();
      }
      await updCars();
      garage.innerHTML = renderGarage();
    }
    if (e.target.classList.contains('start-engine-btn')) {
      const id = Number(e.target.id.split('start-engine-car-')[1]);
      startDriving(id);
    }
    if (e.target.classList.contains('stop-engine-btn')) {
      const id = Number(e.target.id.split('stop-engine-car-')[1]);
      stopDriving(id);
    }
  });
};

export default carControlsListener;
