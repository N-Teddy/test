import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import Aside from '@/Components/Frontend/Aside/Aside'
import { IoLocationSharp } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import Card from '@/Components/Frontend/Card/Card'


export default function page() {
    return (
        <main>
            <Nav />
            <section className={`${styles.container} flex justify-between`}>
                <section>
                    <Aside />
                </section>
                <section className={`${styles.main}`}>
                    <div className={`mt-8`}>
                        <div className={`${styles.background}`}>
                            <div className={`${styles.profile} pt-6 `}>
                                <div className={`${styles.profile_head}  flex flex-col items-center`}>
                                    <div className={`${styles.profile_image} `}>
                                        <img src="https://secure.gravatar.com/avatar/a8a451d14526d871455cd10584609ae9?s=96&d=mm&r=g" width={80} height={80} className={`rounded-full`} alt="" />
                                    </div>
                                    <div className={`${styles.profile_name} text-white text-xl`}>
                                        <p>OvicSoft</p>
                                    </div>
                                </div>
                                <div className={`${styles.profile_info} text-white ml-5 pb-4 mt-6`}>
                                    <ul>
                                        <li className={`flex gap-2 mb-2`}>
                                            <span><IoLocationSharp size={20}/></span>
                                            <span> Z115, Quyet Thang Thai Nguyen, Vietnam</span>
                                        </li>
                                        <li className={`flex gap-2 mb-2`}>
                                            <span><IoPhonePortraitOutline size={20} /></span>
                                            <span> +222-1800-2628</span>
                                        </li>
                                        <li className={`flex gap-2 mb-2`}>
                                            <span><FaEnvelope size={17} /></span>
                                            <span> lead.kutethemes@gmail.com</span>
                                        </li>
                                        <li className={`flex gap-2 mb-2`}>
                                            <span><IoIosStar size={20} /></span>
                                            <span> 4.31 rating from 78 reviews</span>
                                        </li>
                                        <li className={`flex gap-2 mb-2`}>
                                            <span><IoIosCart size={20} /></span>
                                            <span> Store Open </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`mt-20 w-full px-5 flex justify-between text-white`}>
                                <div>
                                    <input type="text" className={`py-2 pl-3  text-gray-600 rounded-l-sm w-64 `} placeholder='teddy'/>
                                    <button className={`py-2 px-5 bg-red-600 rounded-r-sm`}>Search</button>
                                </div>
                                <div>
                                    <div className={`text-gray-500 py-2 px-10 rounded-full bg-white`}>default sorting</div>
                                </div>
                            </div>
                        </div>
                        <section className={`flex flex-wrap justify-between mt-5 gap-y-3`}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </section>
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    )
}
