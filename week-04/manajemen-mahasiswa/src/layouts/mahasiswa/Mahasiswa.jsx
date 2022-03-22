import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { AddButton, Navbar, ProfileCard } from '../../components'

const Mahasiswa = ({

}) => {
    return (
        <>
            <Navbar />
            <Container maxW={'80rem'} centerContent>
                <SimpleGrid columns={3} gap={4} p={8}>
                    <AddButton/>
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Mahasiswa;