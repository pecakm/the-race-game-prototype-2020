import { Unit } from '../../theme/units';
import { WorldHeight } from '../World/World.constants';

export const CarWidth = 3 * Unit;
export const CarHeight = 4 * Unit;
export const LeftCarX = 2 * Unit;
export const CarY = WorldHeight - CarHeight - Unit;
console.log(CarY);
export const RightCarX = 6 * Unit;

export const CarSide = {
  Left: 'left',
  Right: 'right',
};
