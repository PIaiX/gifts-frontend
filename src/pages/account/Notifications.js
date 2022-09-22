import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Notifications(props) {
    return (
        <div className='box p-5'>
            <h1>Уведомления</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Сообщение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7.03.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                    <tr>
                        <td>4.02.2020</td>
                        <td>Ваш заказ отправлен. Вы можете отслеживать заказ на сайте CDEK по трек номеру 123456789</td>
                    </tr>
                    <tr>
                        <td>7.01.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                    <tr>
                        <td>1.01.2020</td>
                        <td>На ваш счет зачислено 70 баллов</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}