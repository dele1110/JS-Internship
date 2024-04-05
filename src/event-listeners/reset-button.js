import store from '../secondary-functions/store';
import stopDriving from '../secondary-functions/stop-driving';

const stopAndResetRace = async () => {
  const resetButton = document.getElementById('reset');

  resetButton.addEventListener('click', async () => {
    const startRaceButton = document.getElementById('race');
    const winnerMessage = document.getElementById('winner-mesage');
    winnerMessage.classList.remove('display');
    resetButton.disabled = true;
    startRaceButton.disabled = true;
    store.cars.forEach(({ id }) => {
      stopDriving(id);
    });
    resetButton.disabled = false;
    startRaceButton.disabled = false;
  });
};

export default stopAndResetRace;
