import { Color } from '../../theme/colors';
import {
  CarWidth,
  CarHeight,
  CarSide,
  CarY,
  LeftCarX,
  RightCarX,
} from './Car.constants';

export const drawCar = (ctx, carSide) => {
  const carX = carSide === CarSide.Left ? LeftCarX : RightCarX;
  ctx.fillStyle = Color.Red;
  ctx.fillRect(carX, CarY, CarWidth, CarHeight);
};
