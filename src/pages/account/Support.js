import React from 'react';
import InputFile from '../../components/utils/InputFile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Support(props) {
    return (
        <div className='box p-5'>
            <Row>
                <Col md={7}>
                    <h1>Служба поддержки</h1>
                    <p className='mb-4'>Напишите нам, если у вас возникли вопросы с доставкой или товаром. Опишите ситуацию. Мы обязательно ответим вам.</p>
                    <form>
                        <label className='mb-2'>Электронная почта <span className='main-color'>*</span></label>
                        <input className='mb-4' type='email' placeholder='mail.@mail.ru'/>
                        <label className='mb-2'>Опишите жалобу</label>
                        <textarea placeholder='Комментарий' rows='5'></textarea>
                        <InputFile multiple={true} className="mt-4"/>
                        <button type='button' className='btn-1 fs-12 mt-4'>Отправить</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
}