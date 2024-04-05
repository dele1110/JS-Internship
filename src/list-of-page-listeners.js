import viewSelector from './event-listeners/select-view-buttons';
import buttonToggler from './event-listeners/buttons-toggler';
import generateButtonListener from './event-listeners/generate-cars-button';
import prevNextButtonsListener from './event-listeners/prev-next-buttons';
import sortingCardsButtonsListener from './event-listeners/sort-winners-buttons';
import carControlsListener from './event-listeners/car-controll-buttons';
import goRacelistener from './event-listeners/race-button';
import stopAndResetRace from './event-listeners/reset-button';
import creteNewCar from './event-listeners/crete-new-car';
import updateSelectedCar from './event-listeners/update-car.button';

const pageListeners = async () => {
  viewSelector();
  buttonToggler();
  generateButtonListener();
  prevNextButtonsListener();
  sortingCardsButtonsListener();
  carControlsListener();
  goRacelistener();
  stopAndResetRace();
  creteNewCar();
  updateSelectedCar();
};

export default pageListeners;
