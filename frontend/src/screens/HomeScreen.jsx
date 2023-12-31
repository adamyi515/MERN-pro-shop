import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const getProducts = await axios.get('http://localhost:5000/api/products');
      setProducts(getProducts.data.products)
    }

    getAllProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>  
      <Row>
        { products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen