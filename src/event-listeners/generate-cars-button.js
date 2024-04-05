import generateHundredRandomCars from '../secondary-functions/cars-generator';
import { createCar } from '../api';
import { updCars } from '../update-state';
import renderGarage from '../render-garage';
import buttonToggler from './buttons-toggler';

const generateButtonListener = async () => {
  const generateButton = document.getElementById('generator');
  const garage = document.getElementById('garage');

  generateButton.addEventListener('click', async () => {
    generateButton.disabled = true;
    const cars = generateHundredRandomCars();
    await Promise.all(cars.map(async (car) => createCar(car)));
    await updCars();
    garage.innerHTML = renderGarage();
    generateButton.disabled = false;
    buttonToggler();
  });
};

export default generateButtonListener;
