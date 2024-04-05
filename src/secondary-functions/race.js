import store from './store';

const calculateRaceWinner = async (promises, ids) => {
  const { success, id, time } = await Promise.race(promises);
  if (!success) {
    const failedIndex = ids.findIndex((index) => index === id);
    promises.splice(failedIndex, 1);
    ids.splice(failedIndex, 1);
    if (promises.length < 1) return null;
    return calculateRaceWinner(promises, ids);
  }
  return { ...store.cars.find((car) => car.id === id), time: +(time / 1000).toFixed(2) };
};

const startRace = async (promis) => {
  const promises = store.cars.map(({ id }) => promis(id));
  const winner = (await calculateRaceWinner(promises, store.cars.map((car) => car.id)));
  return winner;
};

export default startRace;
