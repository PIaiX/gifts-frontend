import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Filter(props) {
    function toggle(id) {
        console.log(document.getElementById(id).style.display === 'block')
        document.getElementById(id).style.display = (document.getElementById(id).style.display === 'block') ? 'none' : 'block'
    }

    return (
        <form className='filter'>
            <fieldset>
                <legend onClick={()=>toggle('availability')}>
                    <FiChevronDown/>
                    <span>Наличие в магазине</span>
                </legend>
                <div className='content' id='availability'>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Наличие в магазине</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: сегодня</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: завтра</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Под заказ: позже</span>
                    </label>
                    <label>
                        <input type='checkbox' name='availability' />
                        <span>Отсутсвующие в продаже</span>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend onClick={()=>toggle('price')}>
                    <FiChevronDown/>
                    <span>Цена</span>
                </legend>
                <div className='content' id='price'>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>Менее 15 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>15 001 - 25 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>25 001 - 35 000 ₽</span>
                    </label>
                    <label>
                        <input type='checkbox' name='price' />
                        <span>45 000 ₽ и более</span>
                    </label>
                </div>
            </fieldset>
        </form>
    );
}