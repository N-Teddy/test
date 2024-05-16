import React from 'react'
import styles from './Shop.module.css'
import { FaPhone } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Shop() {
    return (
        <section className={`${styles.store_wrapper} rounded-sm bg-white`}>
            <div>
                <div className={`${styles.store_header} py-5 px-5 relative `}>
                    <div className={`absolute -z-10 top-0`}>
                        <img src="https://uminex.kutethemes.net/dokan/wp-content/plugins/dokan-lite/assets/images/default-store-banner.png" width={329} alt="" />
                    </div>
                    <p className={`font-semibold text-lg text-gray-600 mb-2`}>Compte Secours</p>
                    <p className={`text-sm text-gray-500 mb-2`}>Koumassi, Abidjan, Ivory Coast</p>
                    <p className={`flex gap-2 items-center text-sm text-gray-500`}>
                        <FaPhone size={20} />
                        +22508694746
                    </p>
                </div>
                <div className={`py-4 px-5 text-red-500 bg-gray-200 relative`}>
                    <div className={`w-20 h-20 overflow-hidden rounded-full absolute ${styles.image_container} bg-white`}>
                        <img className={`${styles.profile_image}`} src="https://secure.gravatar.com/avatar/a8a451d14526d871455cd10584609ae9?s=96&d=mm&r=g" alt="" />
                    </div>
                    <IoIosArrowDroprightCircle size={32} />
                </div>
            </div>
        </section>
    )
}
