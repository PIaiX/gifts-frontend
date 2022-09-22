import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function BonusCard(props) {
    return (
        <div className='box p-5'>
            <h1>Баллы</h1>
            <Row>
                <Col md={7}>
                    <h3 className='text-start mb-4'>Данные карты</h3>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>Номер карты</td>
                                <td>4506 0532 3212 4567</td>
                            </tr>
                            <tr>
                                <td>Статус карты</td>
                                <td>Скидка 2 %</td>
                            </tr>
                        </tbody>
                    </Table>
                    <button type="button" className='btn-1 w-100 mt-4'>Показать QR-код</button>
                </Col>
                <Col md={5}>
                    <figure className='bonus-card'>
                        <img src='imgs/bonus-card.svg'/>
                        <figcaption>
                            <div className='num'>0</div>
                            <div className='text'>БАЛЛОВ</div>
                        </figcaption>
                    </figure>
                </Col>
            </Row>

            <h3 className='mt-5'>История начислений</h3>
        </div>
    );
}