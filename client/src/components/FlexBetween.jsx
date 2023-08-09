import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexBasis: 'auto',
});

export default FlexBetween;