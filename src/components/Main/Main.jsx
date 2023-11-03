import React from 'react'
import Cards from './Cards/Cards'
import TitleImg from './Other/TitleImg'
import Head from '../../utils/Head'

export default function Main() {
    return (
        <main>
            <Head title="URLAUBSZIELE" descr="Wir präsentieren Ihnen Urlaubsziele aus aller Welt" />
            <TitleImg />
            <Cards />

        </main>
    )
}
