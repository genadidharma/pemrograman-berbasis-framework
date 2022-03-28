import { Container, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../api'
import { Navbar, Product } from '../../components'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/products`)
            .then(response => response.json())
            .then(result => {
                setProducts(result)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Navbar />
            <Container maxW={'80rem'} centerContent>
                <SimpleGrid columns={3} gap={4} p={8}>
                    {
                        products.map(product => {
                            return <Link to={`product/${product.id}`}>
                                <Product
                                    key={product.id}
                                    image={product.image}
                                    imageAlt={product.imageAlt}
                                    title={product.title}
                                    price={product.price}
                                    onProductClick={product}
                                />
                            </Link>
                        })
                    }
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Products;