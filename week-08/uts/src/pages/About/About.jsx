import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function About() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Profile
                    </Text>
                    <Heading>Genadi Dharma</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        An ordinary guy passionate with UX Design
                    </Text>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://miro.medium.com/fit/c/231/231/1*70QIb8vHV52ndbev3rlYWQ.jpeg'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}