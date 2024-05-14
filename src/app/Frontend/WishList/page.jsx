import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'

export default function page() {
    return (
        <main>
            <Nav />
            <section className={`container`}>
                <section>
                    <PageTitle />
                </section>
                <section>
                    <table className={`w-full`}>
                        <thead>
                            <tr>
                                <th className={`py-4 px-3 text-left`}>IMAGE</th>
                                <th className={`py-4 px-3 text-left`}>PRODUCT NAME</th>
                                <th className={`py-4 px-3 text-left`}>UNIT PRICE</th>
                                <th className={`py-4 px-3 text-left`}>STOCK status</th>
                                <th className={`py-4 px-3 text-left`}></th>
                            </tr>
                        </thead>
                        <tbody>
            
                        </tbody>
                    </table>
                </section>
            </section>
            <Footer />
        </main>
    )
}
