import { Box, Center, Image, Text, useColorModeValue } from "@chakra-ui/react"

function Product({
    image,
    imageAlt,
    title,
    price,
}) {

    return (
        <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'>
            <Center
                backgroundColor={'white'}>
                <Image
                    src={image}
                    alt={imageAlt}
                    boxSize={'300px'}
                    objectFit={'contain'} />
            </Center>

            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {title}
                </Box>

                <Box
                    color={useColorModeValue('yellow.500', 'yellow.300')}>
                    {price}
                </Box>
            </Box>
        </Box>
    )
}

export default Product