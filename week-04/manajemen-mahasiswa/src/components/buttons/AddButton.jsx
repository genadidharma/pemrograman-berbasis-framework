import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'

const AddButton = ({
    children,
    onSave
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
                    <ModalHeader>Tambah Mahasiswa</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {children}
                    </ModalBody>
                    {
                        onSave && (
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={() => {
                                    onSave()
                                    onClose()
                                }}>
                                    Tambah
                                </Button>
                                <Button onClick={onClose}>Batal</Button>
                            </ModalFooter>
                        )
                    }
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddButton;