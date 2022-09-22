import React from 'react';
import Order from '../../components/Order';

export default function History(props) {
    return (
        <div className='box p-5'>
            <h1>История заказов</h1>
            <Order orderNum={'113'} date={'1.11.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
            <Order orderNum={'112'} date={'21.10.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
            <Order orderNum={'111'} date={'17.08.2022'} total={'2000'} products={[
                {product:'Термостакан «Любимая подруга. Цветы», 350 мл', count: '1', price: '500'},
                {product:'Набор чай чёрный 50 г, шоколад молочный, варежки 19 см "Счастливая посылочка"', count: '3', price: '1500'},
            ]} />
        </div>
    );
}