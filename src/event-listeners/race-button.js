import startDriving from '../secondary-functions/start-driving';
import startRace from '../secondary-functions/race';
import { saveWinners } from '../api';
import { updWinners } from '../update-state';
import renderWinners from '../render-winners';
import sortingCardsButtonsListener from './sort-winners-buttons';

const goRacelistener = async () => {
  document.getElementById('reset').disabled = false;
  const startRaceButton = document.getElementById('race');

  startRaceButton.addEventListener('click', async () => {
    const winnerMessage = document.getElementById('winner-mesage');
    document.getElementById('reset').disabled = true;

    startRaceButton.disabled = true;
    const winner = await startRace(startDriving);
    if (!winner) { startRaceButton.disabled = false; return; }
    winnerMessage.innerHTML = `${winner.name} went first in ${winner.time} seconds!`;
    winnerMessage.classList.add('display');

    await saveWinners(winner);
    await updWinners();
    document.getElementById('winners').innerHTML = renderWinners();
    await sortingCardsButtonsListener();
    document.getElementById('reset').disabled = false;
    startRaceButton.disabled = false;
  });
};

export default goRacelistener;
