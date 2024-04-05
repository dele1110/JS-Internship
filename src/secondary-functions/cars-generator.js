const names = [
  'Porshe',
  'Tesla',
  'Kia',
  'Peugeot',
  'Honda',
  'Jaguar',
  'Mazda',
  'Volvo',
  'MINI',
  'Toyota',
  'Volodymyr',
];
const models = [
  '911',
  'Model Y',
  'Seltos',
  '206',
  'CR-V',
  'F-PACE',
  'CX-5',
  'XC60',
  '3-door',
  'Corolla',
  'Zelenskyy',
];

export const generateRandomName = () => {
  const name = names[Math.floor(Math.random() * models.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${name} ${model}`;
};
export const generateRandomColor = () => {
  const symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateHundredRandomCars = (countCars = 100) => new Array(countCars)
  .fill(0)
  .map(() => ({
    name: generateRandomName(),
    color: generateRandomColor(),
  }));

export default generateHundredRandomCars;
