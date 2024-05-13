import styles from './Aside.module.css'
import { GiOfficeChair } from "react-icons/gi";
import { IoWatchOutline, IoHardwareChipOutline, IoGameControllerOutline, IoCameraOutline, IoHomeOutline } from "react-icons/io5";
import { FaLaptop, FaFileAlt, FaShieldAlt, FaGift, FaRegMoneyBillAlt } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";
import { GiHeadphones } from "react-icons/gi";

export default function Aside() {
     return (
          <aside className={`${styles.aside}`}>
               <div className={` flex flex-wrap w-full `}>
                    <section className={`mb-9 bg-white w-full ${styles.categories}`}>
                         <div>
                              <ul className={`text-sm text-gray-600 ${styles.aside_ul}`}>
                                   <li>
                                        <GiOfficeChair size={16} />
                                        Office
                                   </li>
                                   <li>
                                        <IoWatchOutline size={16} />
                                        Watches
                                   </li>
                                   <li>
                                        <FaLaptop size={16} />
                                        Laptop & Computers
                                   </li>
                                   <li>
                                        <CgScreen size={16} />
                                        TV $ Audio
                                   </li>
                                   <li>
                                        <FiSmartphone size={16} />
                                        Smartphones & Tablets
                                   </li>
                                   <li>
                                        <IoHardwareChipOutline size={16} />
                                        Computer Hardware
                                   </li>
                                   <li>
                                        <IoGameControllerOutline size={16} />
                                        Gamepad & Console
                                   </li>
                                   <li>
                                        <IoCameraOutline size={16} />
                                        Camera
                                   </li>
                                   <li>
                                        <IoHomeOutline size={16} />
                                        Home & Electronics
                                   </li>
                                   <li>
                                        <GiHeadphones size={16} />
                                        Headphones & Speakers
                                   </li>
                              </ul>
                         </div>
                    </section>
                    <section>
                         <div className={`mb-10 `}>
                              <div>
                                   <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/banners/banner4.jpg" alt="" />
                              </div>
                         </div>
                    </section>
                    <section className={`bg-white`}>
                         <div>
                              <h3 className={`border-b border-solid mb-2 border-gray-500 border-0`}>LATEST PRODUCTS</h3>
                              <div className={`flex flex-wrap`}>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/2-80x80.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Yulculpa Ullamco</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div className={`${styles.item_price} text-red-600`}>$51.09</div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/7-80x80.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Xancetta Bresao</span>
                                             </div>
                                             <div className={`${styles.rating}`}>
                                                  <span>5 stars</span>
                                             </div>
                                             <div className={`${styles.item_price}`}>
                                                  <span className={`${styles.item_price} text-red-600`}>$70.30</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/4-80x80.jpg" alt="" />
                                        </div>
                                        <div className=''></div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Wamboudin Ribeye</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div>
                                                  <span className={`${styles.item_price} text-red-600`}>$57.75</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/19-80x80.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Srehenderit Dolore</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div className={`${styles.item_price}`}>
                                                  <span className={`${styles.item_price} text-red-600`}>$50.21</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className={`w-full bg-white`}>
                         <div className={` border border-gray-300 border-solid mt-5 mb-10 px-5 text-gray-600 text-sm ${styles.quality}`}>
                              <section className={`flex py-6 gap-2 border-0 border-b border-gray-300 border-solid`}>
                                   <div><FaFileAlt size={30} /></div>
                                   <div>
                                        <p className={` font-medium`}>FREE DELIVERY</p>
                                        <p className={`text-gray-400`}>On order over</p>
                                   </div>
                              </section>
                              <section className={`flex py-6 gap-2 border-0 border-b border-gray-300 border-solid`}>
                                   <div><FaShieldAlt size={30} /></div>
                                   <div>
                                        <p className={` font-medium`}>ORDER PROTECTION</p>
                                        <p className={`text-gray-400`}>Secured information</p>
                                   </div>
                              </section>
                              <section className={`flex py-6 gap-2 border-0 border-b border-gray-300 border-solid`}>
                                   <div><FaGift size={30} /></div>
                                   <div>
                                        <p className={`font-medium`}>PROMOTION GIFT</p>
                                        <p className={`text-gray-400`}>Special offers</p>
                                   </div>
                              </section>
                              <section className={`flex py-6 gap-2`}>
                                   <div><FaRegMoneyBillAlt size={30} /></div>
                                   <div>
                                        <p className={`font-medium`}>MONEY BACK</p>
                                        <p className={`text-gray-400`}>Return over 30days</p>
                                   </div>
                              </section>
                         </div>
                    </section>
                    <section>
                         <div className='mb-10'>
                              <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/banners/banner5.jpg" alt="" />
                         </div>
                    </section>
                    <section className={`w-full bg-white`}>
                         <div>
                              <h3 className={`mb-2 ${styles.h3}`}>LATEST BLOGS</h3>
                              <div className={`mb-8`}>
                                   <div className={`my-3`}>
                                        <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/blog/4-250x174.jpg" alt="" />
                                   </div>
                                   <div>
                                        <h4 className={`font-bold text-base text-gray-800 mb-4`}>Biten demon lector in henderit in vulp</h4>
                                        <div className={`text-xs text-gray-600 flex justify-between`}>
                                             <span>october 24th, 2023</span>
                                             <span>comments</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className={`bg-white`}>
                         <div>
                              <h3 className={`border-b border-0 mb-2 border-solid border-gray-500`}>TOP RATED</h3>
                              <div className={`flex flex-wrap`}>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/funiture/4-100x100.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Yulculpa Ullamco</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div className={`${styles.item_price} text-red-600`}>$51.09</div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/id-update/Electronics/14-100x100.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Xancetta Bresao</span>
                                             </div>
                                             <div className={`${styles.rating}`}>
                                                  <span>5 stars</span>
                                             </div>
                                             <div className={`${styles.item_price}`}>
                                                  <span className={`${styles.item_price} text-red-600`}>$70.30</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/index2/20-100x100.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Wamboudin Ribeye</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div>
                                                  <span className={`${styles.item_price} text-red-600`}>$57.75</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={` ${styles.item} flex gap-2`}>
                                        <div className={`${styles.item_image}`}>
                                             <img src="https://opencart4.magentech.com/themes/so_emarket/image/cache/catalog/demo/product/index2/18-100x100.jpg" alt="" />
                                        </div>
                                        <div className={`${styles.item_info}`}>
                                             <div className={`${styles.item_title}`}>
                                                  <span className={`text-sm text-gray-600`}>Srehenderit Dolore</span>
                                             </div>
                                             <div className={`${styles.rating}`}>5 stars</div>
                                             <div className={`${styles.item_price}`}>
                                                  <span className={`${styles.item_price} text-red-600`}>$50.21</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
          </aside>
     )
}
