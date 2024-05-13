import styles from './Card.module.css'
import { FaRegStar } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";
import { FaHeart, FaEye } from "react-icons/fa";
import { GoStack } from "react-icons/go";

export default function Card() {
    return (
        <section className={`${styles.card} `}>
            <div className={`p-4 relative`}>
                <div className={`relative ${styles.menu_container}`}>
                    <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/11-270x270.jpg" width={189} height={189} alt="" />
                    <div className={`absolute top-7 text-white overflow-hidden ${styles.menu}`}>
                        <div className={`flex ${styles.icon_1} ${styles.icon}`}>
                            <span className={`py-2 bg-gray-500  px-2`}><GrBasket /></span>
                            <span className={`text-xs hidden py-2 px-4`}>Add to Card</span>
                        </div>
                        <div className={`flex ${styles.icon_2}  ${styles.icon}`}>
                            <span className={`py-2 bg-gray-500 px-2`}><FaHeart /></span>
                            <span className={`text-xs hidden py-2 px-4`}>Add to Wishlist</span>
                        </div>
                        <div className={`flex ${styles.icon_3}  ${styles.icon}`}>
                            <span className={`py-2 bg-gray-500  px-2`}><GoStack /></span>
                            <span className={`text-xs hidden py-2 px-4`}>Compare</span>
                        </div>
                        <div className={`flex ${styles.icon_4}  ${styles.icon}`}>
                            <span className={`py-2 bg-gray-500 px-2`}><FaEye /></span>
                            <span className={`text-xs hidden py-2 px-4`}>Quick view</span>
                        </div>
                    </div>
                </div>
                <div className={`pt-4 flex flex-col gap-2`}>
                    <p className={`${styles.product_name} text-sm`}>Apple Airpods Pro M/A Bluetooth 7.1</p>
                    <p className={`${styles.product_store} text-sm`}>Sold By <span className={`text-red-500 font-semibold`}>OvicSoft</span></p>
                    <div className={`${styles.product_rating} flex`}>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <p className={`${styles.product_price} text-red-500`}>$219</p>
                </div>
            </div>
        </section>
    )
}
