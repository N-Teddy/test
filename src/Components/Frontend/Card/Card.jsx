import styles from './Card.module.css'
import { FaRegStar } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { GoHeart } from "react-icons/go";


export default function Card() {
    return (
        <section className={`${styles.card} rounded-sm `}>
            <div className={`p-4 relative`}>
                <div className={`relative ${styles.menu_container}`}>
                    <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/11-270x270.jpg" width={189} height={189} alt="" />
                    <div className={`absolute top-7 text-white overflow-hidden ${styles.menu}`}>
                        <div className={`flex gap-1 ${styles.icon_1} ${styles.icon}`}>
                            <span className={`py-2 text-gray-500 b-color border-1 border-solid rounded-full  px-2`}><GrBasket /></span>
                            <span className={`text-xs hidden py-2 bb-color bg-blue border-1 border-solid rounded-3xl  px-4`}>Add to Card</span>
                        </div>
                        <div className={`flex gap-1 ${styles.icon_2}  ${styles.icon}`}>
                            <span className={`py-2 text-gray-500 b-color border-1 border-solid rounded-full px-2`}><GoHeart /></span>
                            <span className={`text-xs hidden py-2 bb-color bg-blue border-1 border-solid rounded-3xl  px-4`}>Add to Wishlist</span>
                        </div>
                        <div className={`flex gap-1 ${styles.icon_3}  ${styles.icon}`}>
                            <span className={`py-2 text-gray-500 b-color border-1 border-solid rounded-full  px-2`}><GoStack /></span>
                            <span className={`text-xs hidden py-2 bb-color bg-blue border-1 border-solid rounded-3xl  px-4`}>Compare</span>
                        </div>
                        <div className={`flex gap-1 ${styles.icon_4}  ${styles.icon}`}>
                            <span className={`py-2 text-gray-500 b-color border-1 border-solid rounded-full px-2`}><FaEye /></span>
                            <span className={`text-xs hidden py-2 bb-color bg-blue border-1 border-solid rounded-3xl px-4`}>Quick view</span>
                        </div>
                    </div>
                </div>
                <div className={`pt-4 flex flex-col gap-2`}>
                    <p className={`${styles.product_name} text-sm font-medium`}>Apple Airpods Pro M/A Bluetooth 7.1</p>
                    <p className={`${styles.product_store} text-sm`}>Sold By <span className={`color_blue font-semibold`}>OvicSoft</span></p>
                    <div className={`${styles.product_rating} flex`}>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <p className={`${styles.product_price} color_blue font-semibold`}>$219</p>
                </div>
            </div>
        </section>
    )
}
