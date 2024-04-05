import { createCar } from '../api';
import { updCars } from '../update-state';
import renderGarage from '../render-garage';
import { generateRandomName, generateRandomColor } from '../secondary-functions/cars-generator';
import buttonToggler from './buttons-toggler';

const creteNewCar = async () => {
  const createCarButton = document.getElementById('create-btn');
  createCarButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('create-name');
    const color = document.getElementById('create-color');
    const garage = document.getElementById('garage');

    const car = {
      name: name.value,
      color: color.value,
    };

    await createCar(car);
    await updCars();
    garage.innerHTML = renderGarage();
    name.value = generateRandomName();
    color.value = generateRandomColor();
    buttonToggler();
  });
};

export default creteNewCar;
