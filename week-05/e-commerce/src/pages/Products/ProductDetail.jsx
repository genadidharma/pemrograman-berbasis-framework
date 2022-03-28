import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../api';
import { Navbar } from '../../components';

const ProductDetail = () => {

    const [product, setProduct] = useState({
        "id": 1,
        "image": "",
        "imageAlt": "",
        "title": "",
        "price": "",
        "description": "",
        "details": {
            "dimension": "",
            "department": "",
            "frameType": "",
            "lenstWidth": ""
        }
    })
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/products/${id}`)
            .then(response => response.json())
            .then(result => {
                setProduct({
                    ...result,
                    details: {
                        ...result.details
                    }
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Navbar />
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={
                                product.image
                            }
                            fit={'contain'}
                            align={'center'}
                            background={'white'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {product.title}
                            </Heading>
                            <Text
                                color={useColorModeValue('gray.900', 'gray.400')}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                {product.price} USD
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text fontSize={'lg'}>
                                    {product.description}
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Dimension:
                                        </Text>{' '}
                                        {product.details.dimension}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Department:
                                        </Text>{' '}
                                        {product.details.department}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Frame Type:
                                        </Text>{' '}
                                        {product.details.frameType}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Lens Width:
                                        </Text>{' '}
                                        {product.details.lensWidth}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>

                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    );
}

export default ProductDetail;