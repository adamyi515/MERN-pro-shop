import React from 'react'
import Rating from '../components/Rating';
import products from '../products';
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';


const ProductScreen = () => {
    const { id } = useParams();
    const productItem = products.find((p) => p._id === id);
    const {
        brand, category, countInStock, description,
        image, name, numReviews, price, rating
    } = productItem;


    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>

            <Row>
                <Col md={5}>
                    <Image src={image} alt={name} fluid />
                </Col>

                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{ name }</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={rating} text={`${numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: { price }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: { description }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong> { price }</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong> { countInStock > 0 ? 'In Stock' : 'Out of Stock' }</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={countInStock === 0} >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ProductScreen