import { Color } from '../../theme/colors';
import { CarWidth, CarHeight, RightCarX, LeftCarX, CarSide } from '../Car/Car.constants';

export const drawObstacle = (ctx, obstacleY, obstacleSide) => {
  const obstacleX = obstacleSide === CarSide.Left ? LeftCarX : RightCarX;
  ctx.fillStyle = Color.Black;
  ctx.fillRect(obstacleX, obstacleY, CarWidth, CarHeight);
};
