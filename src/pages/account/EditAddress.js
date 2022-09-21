import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditAddress() {
    return (
        <div className='box p-5'>
            <h1>Редактировать адрес</h1>
            <Row>
                <Col md={7}>
                    <form className='fs-12'>
                        <label className='mb-2'>Ваш город <span className='main-color'>*</span></label>
                        <input className='mb-4' type='text' placeholder='Город'/>
                        <label className='mb-2'>Улица <span className='main-color'>*</span></label>
                        <input className='mb-4' type='text' placeholder='Улица'/>
                        <label className='mb-2'>Дом <span className='main-color'>*</span></label>
                        <input className='mb-4' type='number' placeholder='0'/>
                        <label className='mb-2'>Квартира <span className='main-color'>*</span></label>
                        <input className='mb-4' type='number' placeholder='0'/>
                        <label className='mb-2'>Подъезд</label>
                        <input className='mb-4' type='number' placeholder='0'/>
                        <label className='mb-2'>Этаж</label>
                        <input className='mb-4' type='number' placeholder='0'/>
                        <Row md={2}>
                            <Col>
                                <button type='submit' className='btn-1 w-100'>Сохранить</button>
                            </Col>
                            <Col>
                                <Link to="/account/addresses" className='btn-2 w-100'>Отменить</Link>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    )
}