import React from 'react';

export default function History(props) {
    return (
        <div className='box p-5'>
            <h1>История заказов</h1>
            <div className='order'>
                <div className='title'>
                    <div>
                        <span>№ 113</span>
                        <span>от 1.11.2020</span>
                    </div>
                    <div>1 250 ₽</div>
                </div>
                <div className='main'>
                    <div>
                        <a href='/'>Термостакан «Любимая подруга. Цветы», 350 мл</a>
                        <span>500 ₽</span>
                    </div>
                </div>
            </div>
        </div>
    );
}