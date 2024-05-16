import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import { IoFilter, IoMenu, IoGridSharp } from "react-icons/io5";
import Shop from '@/Components/Frontend/Shop/Shop';
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle';

export default function page() {
    return (

        <main className={`main`}>
            <Nav />
            <section className={` my-10`}>
                <div>
                    <PageTitle />
                </div>
                <section>
                    <section className={`${styles.container}`}>
                        <section className={`p-5 flex justify-between items-center ${styles.head} bg-white`}>
                            <div className={`text-sm`}>Total stores showing: <span>16</span></div>
                            <div className={`flex items-center gap-8`}>
                                <div>
                                    <button className={`flex items-center px-6 py-2 bg-blue text-white gap-3 rounded-full`}>
                                        <IoFilter />
                                        Filter
                                    </button>
                                </div>
                                <div>
                                    <form action="" className={`flex text-gray-500`}>
                                        <label htmlFor="sort">Sort by:</label>
                                        <div>Most Popular</div>
                                    </form>
                                </div>
                                <div className={`flex gap-2 items-center`}>
                                    <span><IoGridSharp size={15} /></span>
                                    <span><IoMenu size={25} /></span>
                                </div>
                            </div>
                        </section>
                        <section className={`flex flex-wrap justify-between gap-y-8`}>
                            <Shop />
                            <Shop />
                            <Shop />
                            <Shop />
                            <Shop />
                            <Shop />
                        </section>
                    </section>
                </section>

            </section>
            <Footer />
        </main>
    )
}
