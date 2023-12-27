import Link from 'next/link'
import React from 'react'
import style from '@/styles/Error.module.css'

export default function NotFound() {
    return (
        <div className={`${style.body}`}>
            <div >
                <div className={`${style.message} d-flex row`}>
                    <h1 className='px-3'>404 |</h1>
                    <h3>Humm... Parece que esta página não existe!</h3>
                </div>
                <Link className={`${style.messageLink} ${style.message} row text-white`} href={`javascript:history.back()`}> Voltar</Link>
            </div>
        </div>
    )
}
