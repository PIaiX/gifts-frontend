import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    return (
        <div className='box p-5'>
            <h1>Контактная информация</h1>
            <ul className='list-unstyled fs-12 mb-4'>
                <li className='mb-3'>Анастасия Иванова</li>
                <li className='mb-3'><a href="tel:+79378456123">+79378456123</a></li>
                <li className='mb-3'><a href="mailto:natya@gmail.com">natya@gmail.com</a></li>
                <li className='mb-3'>Казань</li>
            </ul>
            
            <div className='d-flex align-items-center'>
                <Link to="edit" className='btn-1'>Редактировать</Link>
                <Link to="password" className='btn-1 ms-4'>Изменить пароль</Link>
            </div>
        </div>
    )
}