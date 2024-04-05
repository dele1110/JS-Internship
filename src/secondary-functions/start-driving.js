import { startCar, driveCar } from '../api';
import calculateDistance from './calculate-distanse';
import store from './store';
import animation from './car-animation';

const startDriving = async (id) => {
  const startButton = document.getElementById(`start-engine-car-${id}`);
  const stopButton = document.getElementById(`stop-engine-car-${id}`);

  startButton.disabled = true;

  const { velocity, distance } = await startCar(id);
  const time = Math.round(distance / velocity);

  stopButton.disabled = false;

  const car = document.getElementById(`car-${id}`);
  const flag = document.getElementById(`flag-${id}`);
  const engineBrokeMessage = document.getElementById(`engine-broke-${id}`);

  const carModelWidthInPx = 90;
  const CurrentDistance = Math.floor(calculateDistance(car, flag) + carModelWidthInPx);

  store.animation[id] = animation(car, CurrentDistance, time);
  const driveData = await driveCar(id);
  const { success } = driveData;

  if (!success) {
    const brokeEngine = document.getElementById(`car-road-${id}`);
    window.cancelAnimationFrame(store.animation[id].id);
    brokeEngine.style.backgroundColor = 'palevioletred';
    engineBrokeMessage.style.display = 'block';
    engineBrokeMessage.innerHTML = `${brokeEngine.querySelector('.car-name')?.textContent} is out of race because the engine was broken down`;
  }

  return { success, id, time };
};

export default startDriving;
