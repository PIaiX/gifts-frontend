import React from 'react';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import PopularProductsSlider from '../components/PopularProductsSlider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import NavPagination from '../components/NavPagination';
import StarRating from '../components/utils/StarRating';

export default function ShoppingCart(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='mb-8'>
                    <h1>Корзина</h1>
                    <Row className='gx-4 gx-xxl-5'>
                        <Col lg={8}>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>
                            <CartItem link={'/'} imgUrl={'imgs/product.jpg'} title={'Термостакан со вставкой "Эспрессо Патронум...'} rating={4.3} reviewsCount={'110'}/>

                            <NavPagination className='mt-4 mt-sm-5' />
                        </Col>
                        <Col lg={4} className='mt-5 mt-lg-0'>
                            <Row xs={1} md={2} lg={1} className='g-4'>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fs-20 fw-6 mb-2'>Товары</h3>
                                        <div className='fw-6 mb-4 mb-sm-5'><Link to='/' className='main-color text-decoration-underline'>Авторизируйтесь</Link> и получите 253 Балла</div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='gray fs-15 fw-6'>Итого:</div>
                                            <div className='d-flex flex-wrap align-items-center justify-content-end'>
                                                <span className='fs-17 fw-6'>2 793 ₽</span>
                                                <del className='fs-13 fw-6 gray ms-3'>5 000 ₽</del>
                                            </div>
                                        </div>
                                        <button type='button' className='btn-1 w-100 mt-3 mt-sm-4'>Перейти к оформлению</button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fs-20 fw-6'>Бонусы</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box p-3 p-sm-4'>
                                        <h3 className='text-start fw-6'>Выгодное предложение</h3>
                                        <figure className='product-card-horizontal mt-3 mt-sm-4'>
                                            <img src='imgs/product.jpg' alt='Термостакан со вставкой "Эспрессо Патронум...'/>
                                            <figcaption>
                                                <h6 className='fs-10 fw-4 mb-2'>Термостакан со вставкой "Эспрессо Патронум...</h6>
                                                <div className='d-flex align-items-start fs-08'>
                                                    <StarRating rate={4.6} />
                                                    <span className='gray ms-2'>(12)</span>
                                                </div>
                                                <div className='d-flex align-items-center mt-2 mt-xl-3'>
                                                    <div className='price'>399 руб</div>
                                                    <del>800 руб.</del>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <button type='button' className='btn-2 w-100 mt-3 mt-sm-4'>Добавить в корзину</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                <PopularProductsSlider/>
            </Container>
        </main>
    );
}