import renderWinners from '../render-winners';
import store from '../secondary-functions/store';
import buttonToggler from './buttons-toggler';
import renderGarage from '../render-garage';

const viewSelector = async () => {
  document.getElementById('to-winners').addEventListener('click', async () => {
    document.getElementById('winners').innerHTML = renderWinners();
    document.getElementById('garage').innerHTML = '';
    document.getElementById('hide-panel-wrapper').style.display = 'block';
    document.getElementById('garage').classList.add('moveleft');
    store.view = 'winnersPage';
    buttonToggler();
  });
  document.getElementById('to-garage').addEventListener('click', async () => {
    document.getElementById('garage').innerHTML = renderGarage();
    document.getElementById('hide-panel-wrapper').style.display = 'none';
    document.getElementById('garage').classList.remove('moveleft');
    store.view = 'garagePage';
    buttonToggler();
  });
};

export default viewSelector;
