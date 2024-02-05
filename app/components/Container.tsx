'use client';

import Box from '@mui/material/Box';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box className="w-[80%] flex flex-col gap-[120px] mx-auto">{children}</Box>
  );
};

export default Container;
