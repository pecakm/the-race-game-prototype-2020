import styled from 'styled-components';

import { Color } from '../../theme/colors';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorldWrapper = styled.canvas`
  width: 180px;
  height: 540px;
  border: 1px solid ${Color.Black};
`;

export const Points = styled.h1`
  position: absolute;
  top: 50px;
  left: 50%;
`;

export const MobileButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

export const LeftButton = styled.div`
  width: 50%;
  height: 100%;
`;

export const RightButton = styled.div`
  width: 50%;
  height: 100%;
`;