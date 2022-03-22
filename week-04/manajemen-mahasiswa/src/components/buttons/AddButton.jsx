import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'

const AddButton = ({

}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <>
            <Box
                minW={'24rem'}
                maxW={'24rem'}
                borderWidth='2px'
                borderRadius='lg'
                borderStyle={'dashed'}
                overflow='hidden'
                _hover={{ bg: useColorModeValue('#f7f7f7', '#3b3f46') }}
                onClick={onOpen}
                display={'flex'}
                cursor={'pointer'}
                p={6}>
                <VStack
                    width={'100%'}
                    justify={'center'}
                    spacing={4}>
                    <AddIcon
                        w={6}
                        h={6}
                        color={useColorModeValue('gray.500', 'white')} />
                    <Box as='span' ml='2' color={useColorModeValue('gray.500', 'white')} fontSize='md'>
                        Tambah
                    </Box>
                </VStack>

            </Box>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nama</FormLabel>
                            <Input ref={initialRef} placeholder='Nama' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Alamat</FormLabel>
                            <Input placeholder='Alamat' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Nomor Telepon</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+62' />
                                <Input type='tel' placeholder='Phone Number' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Angkatan</FormLabel>
                            <Select placeholder='Angkatan'>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Status</FormLabel>
                            <RadioGroup defaultValue='2'>
                                <HStack spacing={5} direction='row'>
                                    <Radio colorScheme='green' value='1'>
                                        Aktif
                                    </Radio>
                                    <Radio colorScheme='red' value='2'>
                                        Tidak Aktif
                                    </Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Tambah
                        </Button>
                        <Button onClick={onClose}>Batal</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddButton;