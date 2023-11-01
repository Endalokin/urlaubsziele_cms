import React from 'react'
import Cards from './Cards/Cards'
import DetailPage from './DetailPage/DetailPage'
import TitleImg from './Other/TitleIMG'

export default function Main() {
    return (
        <main>
            <TitleImg />
            <Cards />
            <DetailPage />
        </main>
    )
}
