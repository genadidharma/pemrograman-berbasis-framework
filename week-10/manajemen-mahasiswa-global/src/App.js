import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Mahasiswa } from './layouts';


function App() {
  return (
    <ChakraProvider>
      <Mahasiswa/>
    </ChakraProvider>
  );
}

export default App;
