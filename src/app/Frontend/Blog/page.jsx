import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import Aside from '@/Components/Frontend/Aside/Aside'
import Article from '@/Components/Frontend/Article/Article'


export default function Page() {
    return (
        <main className={`main`}>
            <Nav />
            <section className={`${styles.container} flex gap-8`}>
                <Aside />
                <section className={``}>
                    <div className={``}>
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    )
}
