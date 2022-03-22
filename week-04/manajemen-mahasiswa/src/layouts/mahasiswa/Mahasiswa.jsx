import { Container, SimpleGrid } from '@chakra-ui/react'
import React, { Component } from 'react'
import { API_URL } from '../../api'
import { AddButton, Navbar, ProfileCard } from '../../components'

class Mahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 0,
            nim: 0,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 0,
            status: ""
        }
    }

    getData = () => {
        fetch(`${API_URL}/mahasiswa`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listMahasiswa: result
                })
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <>
                <Navbar />
                <Container maxW={'80rem'} centerContent>
                    <SimpleGrid columns={3} gap={4} p={8}>
                        <AddButton />
                        {
                            this.state.listMahasiswa.map(mahasiswa => {
                               return <ProfileCard key={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.nim} angkatan={mahasiswa.angkatan} alamat={mahasiswa.alamat} telepon={mahasiswa.telepon} status={mahasiswa.status} />
                            })
                        }
                    </SimpleGrid>
                </Container>
            </>
        )
    }
}

export default Mahasiswa;