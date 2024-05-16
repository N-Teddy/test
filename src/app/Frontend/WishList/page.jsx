import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'
import WishList from '@/Components/Frontend/WishList/WishList'

export default function page() {
    return (
        <main className={`main`}>
            <Nav />
            <section className={`container`}>
                <section>
                    <PageTitle />
                </section>
                <section className={`bg-white rounded-md flex justify-center`}>
                    <table className={` inline-block`}>
                        <thead className={`${styles.thead}`}>
                            <tr className={`text-left text-sm `}>
                                <th className={`${styles.image} py-4 px-2.5 `}></th>
                                <th className={`${styles.name} py-4 px-2.5`}>PRODUCT NAME</th>
                                <th className={`${styles.price} py-4 px-2.5`}>UNIT PRICE</th>
                                <th className={`${styles.status} py-4 px-2.5`}>STOCK STATUS</th>
                                <th className={`${styles.add} py-4 px-2.5`}></th>
                                <th className={`${styles.remouve} py-4 px-2.5`}></th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.tbody}`}>
                            <WishList />
                            <WishList />
                            <WishList />
                        </tbody>
                    </table>
                </section>
            </section>
            <Footer />
        </main>
    )
}
