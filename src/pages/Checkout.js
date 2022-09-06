import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/utils/Breadcrumbs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Checkout(props) {
    return (
        <main>
            <Container>
                <Breadcrumbs/>
                <section className='mb-8'>
                    <h1>Оформление заказа</h1>
                    <Row xs={1} md={2} xl={3} className='g-4 g-xxl-5'>
                        <Col>
                            <div className='box p-3 p-sm-4'>
                                <form>
                                    <h3 className='text-start fs-20 fw-6 mb-4'>Авторизуйтесь или зарегестрируйтесь</h3>
                                    <label>Введите e-mail</label>
                                    <input type='email' placeholder='Ваш e-mail' className='mt-2'/>
                                    <label className='mt-3'>Введите пароль</label>
                                    <input type='password' placeholder='Ваш пароль' className='mt-2'/>
                                    <button type='button' className='btn-1 w-100 mt-3'>Войти</button>
                                    <div className='fw-6 mt-3'>Ещё нет аккаунта? <a href='/' className='main-color text-decoration-underline'>Зарегестрироваться</a></div>
                                </form>
                            </div>
                        </Col>
                        <Col>
                            <div className='box p-3 p-sm-4'>
                                <form>
                                    <h3 className='text-start fs-20 fw-6 mb-4'>Быстрое оформление</h3>
                                    <label>Введите имя</label>
                                    <input type='text' placeholder='Ваше имя' className='mt-2'/>
                                    <label className='mt-3'>Введите номер телефона</label>
                                    <input type='tel' placeholder='+7 (965) 345-67-89' className='mt-2'/>
                                    <button type='button' className='btn-1 w-100 mt-3'>Заказать</button>
                                    <div className='fs-08 fw-3 text-center mt-3'>Нажимая на кнопку «Заказать», <br/>вы соглашаетесь с <a href='/' className='main-color text-decoration-underline'>политикой конфидециальности</a></div>
                                </form>
                            </div>
                        </Col>
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
                                <Link to='checkout' className='btn-1 w-100 mt-3 mt-sm-4'>Перейти к оформлению</Link>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}