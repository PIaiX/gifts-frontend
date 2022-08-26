import React from 'react';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import PopularProductsSlider from '../components/PopularProductsSlider';

export default function Catalog(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='mb-8'>
                    <h1>Подарки на 23 февраля</h1>
                    <nav className='categories'>
                        <ul>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Аксессуары для мужчины и ...</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Аксессуары для мужчины и ...</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Аксессуары для мужчины и ...</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Аксессуары для мужчины и ...</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Аксессуары для мужчины и ...</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <figure>
                                        <img src='imgs/product.jpg' alt='раздел'/>
                                        <figcaption><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></figcaption>
                                    </figure>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Row>
                        <Col lg={3} className='d-none d-lg-block'>
                            <Filter />
                        </Col>
                        <Col xs={12} lg={9}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>Сортировка:</div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <select>
                                        <option>Популярные</option>
                                        <option>Сначала дешевле</option>
                                        <option>Сначала дороже</option>
                                    </select>
                                    <select>
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
                        </Col>
                    </Row>
                </section>

                <PopularProductsSlider/>
            </Container>
        </main>
    );
}