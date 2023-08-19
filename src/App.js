import {
  Container,
  Heading,
  Text,
  Stack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setCalculation('+');
    setResult(parseInt(a) + parseInt(b));
  }

  const handleSubtraction = () => {
    setCalculation('-');
    setResult(parseInt(a) - parseInt(b));
  }

  const handleMultiplication = () => {
    setCalculation('×');
    setResult(parseInt(a) * parseInt(b));
  }

  const handleDivision = () => {
    setCalculation('÷');
    setResult(parseInt(a) / parseInt(b));
  }

  const handleResetInput = () => {
    setA(0);
    setB(0);
    setCalculation('');
  }

  const handleResetResult = () => {
    setResult(0);
  }

  return (
    <Container>
      <Heading>Simplest Working Calculator</Heading>
      <Stack direction='row' spacing={4} align='center'>
        <NumberInput>
          <NumberInputField value={a} onChange={(e) => setA(e.target.value)} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontSize='lg'>{calculation}</Text>
        <NumberInput>
          <NumberInputField value={b} onChange={(e) => setB(e.target.value)} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontSize='lg'>= {result}</Text>
      </Stack>
      <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='gray' variant='solid' onClick={handleAddition}>
          Add
        </Button>
        <Button colorScheme='gray' variant='solid' onClick={handleSubtraction}>
          Subtract
        </Button>
        <Button colorScheme='gray' variant='solid' onClick={handleMultiplication}>
          Multiply
        </Button>
        <Button colorScheme='gray' variant='solid' onClick={handleDivision}>
          Divide
        </Button>
        <Button colorScheme='red' variant='solid' onClick={handleResetInput}>
          Reset input
        </Button>
        <Button colorScheme='red' variant='solid' onClick={handleResetResult}>
          Reset result
        </Button>
      </Stack>
    </Container>
  );
}