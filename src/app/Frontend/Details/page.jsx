import React from 'react'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import Card from '@/Components/Frontend/Card/Card'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {
    return (
        <main className={`main`}>
            <Nav />
            <section className={`container bg-white rounded-lg`}>
                <section className={`py-8 px-8 flex justify-between`}>
                    <section className={`w-1/2`}>
                        <div className={`${styles.detail_images}`}>
                            <img src="https://uminex.kutethemes.net/dokan/wp-content/uploads/sites/3/2023/03/products_29_1.jpg" alt="" />
                        </div>
                    </section>
                    <section className={`w-1/2`}>
                        <div className={`${styles.properties}`}>
                            <div className={`${styles.border_bottom}`}>
                                <h1 className={`${styles.product_title} text-2xl primary-color font-semibold`}>Apple BlueTooth AirPods Max MGYH3</h1>
                                <span className={`${styles.vendor} text-sm`}>
                                    Sold By <Link href='/' className={`color_blue font-semibold`}>OvicSoft</Link>
                                </span>
                                <div className={`${styles.rating_review}`}>
                                    <span>stars</span>
                                    <span className={`text-sm`}>(3 Reviews)</span>
                                </div>
                            </div>
                            <div className={`${styles.border_bottom}`}>
                                <span className={`color_blue text-xl font-semibold`}>$59.00</span>
                                <div>
                                    <ul className={`text-sm text-gray-600 ${styles.ul} pt-4`}>
                                        <li>Screen Size 10.9 inch</li>
                                        <li>Operating System iOS 14.0</li>
                                        <li>Product Length 9.74 inch</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.border_bottom}`}>
                                <button className={`bg-blue text-white w-full text-center py-3 rounded-full`}>BUY PRODUCT</button>
                                <div className={`text-xs secondary-color mt-4 font-semibold flex gap-5`}>
                                    <span>ADD TO WISHLIST</span>
                                    <span>COMPARE</span>
                                </div>
                            </div>
                            <div className={` text-sm`}>
                                <div className={`flex`}>
                                    <p className={` w-28 mb-3`}>Availability:</p>
                                    <p className={`text-green-500`}>in stock</p>
                                </div>
                                <div className={`flex`}>
                                    <p className={` w-28`}>Category:</p>
                                    <p>Headphones & Speaker</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className={`container bg-white rounded-lg`}>
                
            </section>
            <Footer />
        </main>
    )
}
