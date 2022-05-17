import { Container, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, SimpleGrid } from '@chakra-ui/react'
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

    deleteData = (id) => {
        fetch(`${API_URL}/mahasiswa/${id}`, { method: 'DELETE' })
            .then(() => {
                this.getData()
            })
    }

    handleForm = (event) => {
        let formInsert = { ...this.state.insertMahasiswa }
        let timestamp = new Date().getTime()
        formInsert['id'] = timestamp
        formInsert['status'] = event
        if (event.target != null) {
            formInsert[event.target.name] = event.target.value
        }

        this.setState({
            insertMahasiswa: formInsert
        })
    }

    addData = () => {
        fetch(`${API_URL}/mahasiswa/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then(() => {
                this.getData()
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
                        <AddButton
                            onSave={this.addData}>
                            <FormControl>
                                <FormLabel>Nama</FormLabel>
                                <Input placeholder='Nama' name='nama' onChange={this.handleForm} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>NIM</FormLabel>
                                <Input type='number' placeholder='Nim' name='nim' onChange={this.handleForm} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Alamat</FormLabel>
                                <Input placeholder='Alamat' name='alamat' onChange={this.handleForm} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Nomor Telepon</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children='+62' />
                                    <Input type='tel' placeholder='Phone Number' name='telepon' onChange={this.handleForm} />
                                </InputGroup>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Angkatan</FormLabel>
                                <Select placeholder='Angkatan' name='angkatan' onChange={this.handleForm}>
                                    <option value='2018'>2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                    <option value='2021'>2021</option>
                                    <option value='2022'>2022</option>
                                </Select>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Status</FormLabel>
                                <Select placeholder='Status' name='status' onChange={this.handleForm}>
                                    <option value='Aktif'>Aktif</option>
                                    <option value='Lulus'>Lulus</option>
                                </Select>
                            </FormControl>
                        </AddButton>
                        {
                            this.state.listMahasiswa.map(mahasiswa => {
                                return <ProfileCard key={mahasiswa.id} idProfile={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.nim} angkatan={mahasiswa.angkatan} alamat={mahasiswa.alamat} telepon={mahasiswa.telepon} status={mahasiswa.status} deleteProfile={this.deleteData} />
                            })
                        }
                    </SimpleGrid>
                </Container>
            </>
        )
    }
}

export default Mahasiswa;