import { CalendarIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Text, Heading, IconButton, Stack, useColorModeValue, VStack, HStack, Badge, Spacer } from '@chakra-ui/react';
import React from 'react';

const ProfileCard = ({
    idProfile,
    nama,
    nim,
    angkatan,
    alamat,
    telepon,
    status,
    deleteProfile
}) => {
    return (
        <Box
            minW={'24rem'}
            maxW={'24rem'}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            p={6}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.400', 'white')}
                alignItems={'top'}>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                        }
                    />
                </Flex>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    justify={'flex-end'}>
                    <IconButton
                        icon={<DeleteIcon w={4} h={4} />}
                        variant={'ghost'}
                        aria-label={'Hapus Mahasiswa'}
                        onClick={() => deleteProfile(idProfile)}
                    />
                </Flex>
            </Flex>

            <VStack
                spacing={2}
                alignItems={'left'}
                mt={8}>
                <Heading as='h3' size='lg' color={useColorModeValue('gray.900', 'white')}>
                    {nama}
                </Heading>
                <HStack
                    align={'center'}
                    spacing={2}>
                    <Text
                        color={useColorModeValue('gray.500', 'white')}>
                        {nim}
                    </Text>
                    <Text
                        color={useColorModeValue('gray.400', 'white')}>
                        •
                    </Text>
                    <Text
                        color={useColorModeValue('gray.500', 'white')}>
                        {angkatan}
                    </Text>
                </HStack>
            </VStack>

            <Flex
                align={'end'}>
                <Box>
                    <VStack
                        mt={4}
                        spacing={2}
                        align={'left'}>
                        <Box display='flex' alignItems='center'>
                            <CalendarIcon
                                w={3}
                                h={3}
                                color={useColorModeValue('gray.500', 'white')} />
                            <Box as='span' ml='2' color='gray.800' fontSize='sm'>
                                {alamat}
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <PhoneIcon
                                w={3}
                                h={3}
                                color={useColorModeValue('gray.500', 'white')} />
                            <Box as='span' ml='2' color='gray.800' fontSize='sm'>
                                {telepon}
                            </Box>
                        </Box>
                    </VStack>
                </Box>
                <Spacer />
                <Box>
                    <Badge ml='1' colorScheme={(status == 'aktif') ? 'green' : 'blue'} fontSize={'sm'}>
                        {status}
                    </Badge>
                </Box>
            </Flex>

        </Box>
    )
}

export default ProfileCard;