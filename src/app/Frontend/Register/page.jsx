import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'

export default function page() {
    return (
        <main>
            <Nav />
            <section className={`my-10`}>
                <div>
                    <PageTitle />
                </div>
                <section className={`${styles.container} flex justify-center`}>
                    <div>
                        <form action="" className={`${styles.form}`}>
                            <div className={`flex gap-4`}>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="first_name">
                                        <p>First name</p>
                                        <input type="text" name="first_name" id="first_name" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="second_name">
                                        <p>Second name</p>
                                        <input type="text" name="second_name" id="second_name" />
                                    </label>
                                </div>
                            </div>
                            <div className={`${styles.form_row}`}>
                                <label htmlFor="email">
                                    <p>Email</p>
                                    <input type="email" name="email" id="email" />
                                </label>
                            </div>
                            <div className={`${styles.form_row}`}>
                                <label htmlFor="password">
                                    <p>Password</p>
                                    <input type="password" name="password" id="password" />
                                </label>
                            </div>
                            <section className={`${styles.vendor}`}>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="shop_name">
                                        <p>Shop name</p>
                                        <input type="text" name="shop_name" id="shop_name" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="shop_url">
                                        <p>Shop URL</p>
                                        <input type="text" name="shop_url" id="shop_url" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="phone_number">
                                        <p>Phone number</p>
                                        <input type="text" name="phone_number" id="phone_number" />
                                    </label>
                                </div>
                            </section>
                            <div className={`flex gap-5 mt-4`}>
                                <div className={`flex gap-2 items-center`}>
                                    <input type="radio" name='status'  />
                                    <label htmlFor="status">I am a customer</label>
                                </div>
                                <div className={`flex gap-2 items-center`}>
                                    <input type="radio" name='status' />
                                    <label htmlFor="status">I am a vendor</label>
                                </div>
                            </div>
                            <div>
                                <button className={`${styles.button}`}>Register</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    )
}
