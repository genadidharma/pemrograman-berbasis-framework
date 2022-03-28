import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';

const Login = ({
    onLogin
}) => {

    let history = useNavigate()
    let location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } }

    console.log(from)

    const login = () => {
        onLogin(from, history)
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={login}>
                                Magic Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Login;