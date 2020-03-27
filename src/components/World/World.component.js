import React, { useRef, useEffect, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { obstaclesSideMock, obstaclesYMock } from '../../mocks/obstacle';

import { Unit } from '../../theme/units';
import { drawCar } from '../Car/Car.component';
import { CarHeight, CarY } from '../Car/Car.constants';
import { CarSide } from '../Car/Car.constants';
import { drawObstacle } from '../Obstacle/Obstacle.component';
import {
  WorldWidth,
  WorldHeight,
  KeyType,
  RefreshTime,
  LevelPoints,
  LevelSpeedInterval,
  DefaultSpeedInterval,
} from './World.constants';
import {
  Container,
  WorldWrapper,
  Points,
  MobileButtons,
  LeftButton,
  RightButton,
} from './World.styled';

const World = () => {
  const worldRef = useRef();
  const [frame, setFrame] = useState(false);
  const [points, setPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [carSide, setCarSide] = useState(CarSide.Left);
  const [obstaclesY, setObstaclesY] = useState(obstaclesYMock);

  useEffect(() => {
    const ctx = worldRef.current.getContext('2d');
    const timeout = setTimeout(() => refresh(ctx), RefreshTime);
    return () => clearTimeout(timeout);
  }, [frame]);

  useEffect(() => {
    const moveForwardTimeout = setTimeout(
      () => {
        if (!gameOver) {
          setObstaclesY(obstaclesY.map((obstacleY) => obstacleY + 1 * Unit));
          setPoints(points + 1);
        }
      },
      getSpeedInterval(points),
    );

    return () => clearTimeout(moveForwardTimeout);
  }, [points]);

  const refresh = (ctx) => {
    if (detectCollission()) {
      setGameOver(true);
    }
    
    ctx.clearRect(0, 0, worldRef.current.width, worldRef.current.height);
    drawCar(ctx, carSide);
    for (let i = 0; i < obstaclesY.length; i++) {
      drawObstacle(ctx, obstaclesY[i], obstaclesSideMock[i]);
    }
    setFrame(!frame);
  };

  const getSpeedInterval = (value) => {
    if (value > LevelPoints[10]) return LevelSpeedInterval[10];
    if (value > LevelPoints[9]) return LevelSpeedInterval[9];
    if (value > LevelPoints[8]) return LevelSpeedInterval[8];
    if (value > LevelPoints[7]) return LevelSpeedInterval[7];
    if (value > LevelPoints[6]) return LevelSpeedInterval[6];
    if (value > LevelPoints[5]) return LevelSpeedInterval[5];
    if (value > LevelPoints[4]) return LevelSpeedInterval[4];
    if (value > LevelPoints[3]) return LevelSpeedInterval[3];
    if (value > LevelPoints[2]) return LevelSpeedInterval[2];
    if (value > LevelPoints[1]) return LevelSpeedInterval[1];
    if (value > LevelPoints[0]) return LevelSpeedInterval[0];
    return DefaultSpeedInterval;
  };

  const detectCollission = () => {
    for (let i = 0; i < obstaclesY.length; i++) {
      const hitInFront = obstaclesY[i] > CarY - CarHeight;
      const hitInBack = obstaclesY[i] < CarY + CarHeight;
      const theSameSide = obstaclesSideMock[i] === carSide;
      if (hitInFront && hitInBack && theSameSide) {
        return true;
      }
    }

    return false;
  };

  const handleKeyPress = (key) => {
    if (key === KeyType.Left) {
      handleTurnLeft();
    } else {
      handleTurnRight();
    }
  };

  const handleTurnLeft = () => {
    if (!gameOver) {
      setCarSide(CarSide.Left);
    }
  };

  const handleTurnRight = () => {
    if (!gameOver) {
      setCarSide(CarSide.Right);
    }
  };

  return (
    <Container>
      <KeyboardEventHandler
        handleKeys={[KeyType.Left, KeyType.Right]}
        onKeyEvent={handleKeyPress}
      />
      <Points>{points}</Points>
      <WorldWrapper
        ref={worldRef}
        width={WorldWidth}
        height={WorldHeight}
      />
      <MobileButtons>
        <LeftButton onTouchStart={handleTurnLeft} />
        <RightButton onTouchStart={handleTurnRight} />
      </MobileButtons>
    </Container>
  );
};

export default World;
