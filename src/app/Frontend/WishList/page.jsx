import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'
import Link from 'next/link'
import { IoEyeOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

export default function page() {
    return (
        <main>
            <Nav />
            <section className={`container`}>
                <section>
                    <PageTitle />
                </section>
                <section>
                    <table className={`w-full inline-block`}>
                        <thead>
                            <tr className={`text-left text-sm `}>
                                <th className={`${styles.image} py-4 px-2.5 `}></th>
                                <th className={`${styles.name} py-4 px-2.5`}>PRODUCT NAME</th>
                                <th className={`${styles.price} py-4 px-2.5`}>UNIT PRICE</th>
                                <th className={`${styles.status} py-4 px-2.5`}>STOCK STATUS</th>
                                <th className={`${styles.add} py-4 px-2.5`}></th>
                                <th className={`${styles.remouve} py-4 px-2.5`}></th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.t_body}`}>
                            <tr>
                                <td className={`${styles.image} py-4 px-2.5 `}>
                                    <img src="https://uminex.kutethemes.net/dokan/wp-content/uploads/sites/3/2023/03/products_25_4-300x300.jpg"  alt="" />
                                </td>
                                <td className={`${styles.name} py-4 px-2.5`}>
                                    <div className={`flex gap-2 text-sm font-semibold items-center`}>
                                        <p>Logitech G203 Wired 8000 DPI For PC/Mac</p>
                                        <span><IoEyeOutline size={20}/></span>
                                    </div>
                                </td>
                                <td className={`${styles.price} py-4 px-2.5`}>
                                    <span>$200.00</span>
                                </td>
                                <td className={`${styles.status} py-4 px-2.5 text-green-500`}>
                                    <span>In Stock</span>
                                </td>
                                <td className={`${styles.add} py-4 px-2.5`}>

                                </td>
                                <td className={`${styles.remouve} py-4 px-2.5`}>
                                    <TiDeleteOutline />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <Footer />
        </main>
    )
}
