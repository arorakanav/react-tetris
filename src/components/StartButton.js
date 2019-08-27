import React from 'react';

import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callBack}) => (

  <StyledStartButton onclick={callBack}>Start Game</StyledStartButton>
)

export default StartButton;