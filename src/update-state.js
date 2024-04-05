import store from './secondary-functions/store';
import { getCars, getWinners } from './api';

export const updCars = async () => {
  const { items, count } = await getCars(store.carsPage);
  store.cars = items;
  store.carsCount = count;
};

export const updWinners = async () => {
  const { items, count } = await getWinners(store.winnersPage, store.sortBy, store.sortOrder);
  store.winners = items;
  store.winnersCount = count;
};

const updateState = async () => {
  await updCars();
  await updWinners();
};

export default updateState;
