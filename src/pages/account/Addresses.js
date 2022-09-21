import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit3 } from "react-icons/fi";

export default function Addresses() {
    return (
        <div className='box p-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='mb-0'>Адреса доставки</h1>
                <Link to='add' className='btn-1'>Добавить адрес</Link>
            </div>
            
            <div className='address mt-4'>
                <div className='flex-1'>
                    <h6 className='mb-1'>Адрес 1</h6>
                    <p>г. Казань, ул. Фучика, д.54, кв.1</p>
                </div>
                <Link to='edit'><FiEdit3/></Link>
                <button type='button' className='ms-4'><FiTrash2/></button>
            </div>
            <div className='address mt-4'>
                <div className='flex-1'>
                    <h6 className='mb-1'>Адрес 1</h6>
                    <p>г. Казань, ул. Фучика, д.54, кв.1</p>
                </div>
                <button type='button'><FiEdit3/></button>
                <button type='button' className='ms-4'><FiTrash2/></button>
            </div>
            <div className='address mt-4'>
                <div className='flex-1'>
                    <h6 className='mb-1'>Адрес 1</h6>
                    <p>г. Казань, ул. Фучика, д.54, кв.1</p>
                </div>
                <button type='button'><FiEdit3/></button>
                <button type='button' className='ms-4'><FiTrash2/></button>
            </div>
            <div className='address mt-4'>
                <div className='flex-1'>
                    <h6 className='mb-1'>Адрес 1</h6>
                    <p>г. Казань, ул. Фучика, д.54, кв.1</p>
                </div>
                <button type='button'><FiEdit3/></button>
                <button type='button' className='ms-4'><FiTrash2/></button>
            </div>
        </div>
    )
}