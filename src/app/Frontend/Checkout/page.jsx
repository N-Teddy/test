import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'

export default function page() {
    return (
        <main className={`main`}>
            <Nav />
            <section>
                <section>
                    <PageTitle />
                </section>
                <section >
                    <form action="" className={`flex justify-between ${styles.container} gap-10`}>
                        <section className={`w-full`}>
                            <h3 className={`pb-3 mb-5 ${styles.h3}`}>BILLING DETAILS</h3>
                            <div>
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
                                    <label htmlFor="region">
                                        <p>Region</p>
                                        <input type="text" name="region" id="region" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="town">
                                        <p>Town</p>
                                        <input type="text" name="town" id="town" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="street">
                                        <p>Street address / Quarter</p>
                                        <input type="text" name="street" id="street" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="phone">
                                        <p>Phone</p>
                                        <input type="tel" name="phone" id="phone" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="Email address">
                                        <p>Email address</p>
                                        <input type="text" name="Email address" id="Email address" />
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className={`w-full`}>
                            <h3 className={`pb-3 mb-5 ${styles.h3}`}>SHIP TO A DIFFERENT ADDRESS?</h3>
                            <div>
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
                                    <label htmlFor="region">
                                        <p>Region</p>
                                        <input type="text" name="region" id="region" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="town">
                                        <p>Town</p>
                                        <input type="text" name="town" id="town" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="street">
                                        <p>Street address / Quarter</p>
                                        <input type="text" name="street" id="street" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="phone">
                                        <p>Phone</p>
                                        <input type="tel" name="phone" id="phone" />
                                    </label>
                                </div>
                                <div className={`${styles.form_row}`}>
                                    <label htmlFor="Email address">
                                        <p>Email address</p>
                                        <input type="text" name="Email address" id="Email address" />
                                    </label>
                                </div>
                            </div>
                        </section>
                    </form>
                </section>
            </section>
            <Footer />
        </main>
    )
}
