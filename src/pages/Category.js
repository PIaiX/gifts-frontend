import React, { useState } from 'react';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import PopularProductsSlider from '../components/PopularProductsSlider';
import NavPagination from '../components/NavPagination';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiX } from "react-icons/fi";

export default function Category(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Аксессуары для мужчины и подростка </h1>

                    <Row>
                        <Col lg={3} className='d-none d-lg-block'>
                            <Filter />
                        </Col>
                        <Col xs={12} lg={9}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <button type='button' onClick={handleShow} className='d-lg-none fs-12 fw-6'>Фильтры</button>
                                <div className='d-none d-lg-block fs-12 fw-6'>Сортировка:</div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <select>
                                        <option>Популярные</option>
                                        <option>Сначала дешевле</option>
                                        <option>Сначала дороже</option>
                                    </select>
                                    <select className='ms-4'>
                                        <option>Показывать по 12</option>
                                        <option>Показывать по 24</option>
                                        <option>Показывать по 36</option>
                                    </select>
                                </div>
                            </div>
                            <hr/>
                            <Row xs={2} md={3} className='gx-2 gx-sm-3 gx-md-4 gy-4'>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                                <Col>
                                    <ProductCard className='' link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                                </Col>
                            </Row>

                            <NavPagination className='pt-5'/>
                        </Col>
                    </Row>
                </section>

                <PopularProductsSlider/>
            </Container>
        </main>
        
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Body>
                <button type='button' className='close' onClick={handleClose}>
                    <FiX/>
                </button>
                <Filter />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}