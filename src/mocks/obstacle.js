import { Unit } from '../theme/units';

const itemsCounter = 150;

const createRandomSides = () => {
  const obstaclesSides = [];
  for (let i = 0; i < itemsCounter; i++) {
    obstaclesSides.push(Math.floor(Math.random() * 2));
  }
  return obstaclesSides.map((item) => item === 0 ? 'left' : 'right');
};

const createRandomY = () => {
  const obstaclesY = [];
  let position = 12 * Unit;
  for (let i = 0; i < itemsCounter; i++) {
    position = (position - Math.floor(12 * Unit + Math.random() * 8 * Unit));
    obstaclesY.push(position);
  }
  return obstaclesY;
}

export const obstaclesSideMock = createRandomSides();
export const obstaclesYMock = createRandomY();
