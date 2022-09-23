import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import BonusHistory from '../../components/BonusHistory';
import NavPagination from '../../components/NavPagination';
import Modal from 'react-bootstrap/Modal';
import { FiXCircle } from "react-icons/fi";


export default function BonusCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <button type="button" onClick={handleShow} className='btn-1 w-100 mt-4'>Показать QR-код</button>
                    <Modal show={show} onHide={handleClose}>
                        <button type="button" className='btn-close'>
                            <FiXCircle />
                        </button>
                        <Modal.Body>
                            <figure className='qr'>
                                <figcaption>
                                    <h5 className='mb-2'>Ваш уникальный</h5> 
                                    <h2 className='text-center fw-7 mb-0'>QR-код</h2>
                                </figcaption>
                                <img src="imgs/qr.png" alt="qr"/>
                            </figure>
                            <button className='btn-1 px-5 mx-auto mt-4' onClick={handleClose}>Назад</button>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col md={5}>
                    <figure className='bonus-card'>
                        <img src='imgs/bonus-card.svg' alt='bonus-card'/>
                        <figcaption>
                            <div className='num'>0</div>
                            <div className='text'>БАЛЛОВ</div>
                        </figcaption>
                    </figure>
                </Col>
            </Row>

            <h3 className='mt-5 mb-3'>История начислений</h3>
            <div className='history'>
                <BonusHistory operation={'1'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'2'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'1'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'2'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'1'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'2'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'1'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'2'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'1'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <BonusHistory operation={'2'} order={'12345'} date={'7.03.2020'} summ={'240'}/>
                <NavPagination className="mt-4" />
            </div>
        </div>
    );
}