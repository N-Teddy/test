import styles from './Nav.module.css'
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from 'next/link';


export default function Nav() {
     return (
          <header className={`${styles.header} bg-white mb-5`}>
               <section className={`${styles.header_top} text-xs primary_color font-medium`}>
                    <div className={`container`}>
                         <div className={`${styles.row} flex justify-between`}>
                              <div className={`py-3`}>
                                   <p>Welcome to Emarket ! Wrap new offers / gift every single day on Weekends – New Coupon code: Happy2017</p>
                              </div>
                              <div>
                                   <ul className={`flex`}>
                                        <li className={`relative ${styles.drop_container} py-3`}>
                                             <button className={`flex items-center gap-xs`}>
                                                  $ US Dollar
                                                  <IoMdArrowDropdown />
                                             </button>
                                             <div className={`${styles.dropdown_menu}`}>
                                                  <ul>
                                                       <li>€ Euro</li>
                                                       <li>£ Pound Sterling</li>
                                                       <li>$ US Dollar</li>
                                                  </ul>
                                             </div>
                                        </li>
                                        <li className={`relative ${styles.drop_container} py-3`}>
                                             <button className={`pl-5 ml-5 flex items-center gap-xs`}>
                                                  English
                                                  <IoMdArrowDropdown />
                                             </button>
                                             <div className={`${styles.dropdown_menu}`}>
                                                  <ul>
                                                       <li>English</li>
                                                       <li>French</li>
                                                  </ul>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </section>
               <section className={`${styles.header_middle} py-2.5`}>
                    <div className={`container`}>
                         <div className={`${styles.row} text-sm flex justify-between items-center`}>
                              <div>
                                   <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/logo-footer.png" alt="" />
                              </div>
                              {/*  */}
                              <div className={`flex mr-10 items-center ${styles.search_container}  font-semibold text-sm  relative`}>
                                   <div className={`absolute py-2.5 px-6 rounded-l-md text-gray-700`}>All Categories</div>
                                   <div>
                                        <input className={` pl-48 pr-32 rounded-md  py-2.5  text-gray-500`} type="text" placeholder='Search for products' name="" id="" />
                                   </div>
                                   <div className={`absolute right-0 py-2.5 px-7 bg-blue rounded-r-md text-white font-semibold text-sm`}>Search</div>
                              </div>

                              <div className={` `}>
                                   <li className={`relative ${styles.drop_container}`}>
                                        <button className={`flex font-semibold primary-color items-center gap-xs`}>
                                             <IoPersonCircleOutline size={37} />
                                             Account
                                        </button>
                                        <div className={`${styles.dropdown_menu}`}>
                                             <ul>
                                                  <li>LOGIN</li>
                                                  <li>REGISTER</li>
                                             </ul>
                                        </div>
                                   </li>
                              </div>
                         </div>
                    </div>
               </section>
               <section className={`${styles.header_bottom}`}>
                    <div className={`container`}>
                         <div className={`${styles.row} flex justify-between items-center`}>
                              <div>
                                   <button className={`flex primary-color items-center px-3 py-2.5 gap-3 rounded-md`}>
                                        <GiHamburgerMenu />
                                        ALL CATEGORIES
                                        <IoIosArrowDown />
                                   </button>
                              </div>
                              {/*  */}
                              <div className={`font-semibold text-sm primary-color`}>
                                   <nav className={`${styles.mid_nav}`}>
                                        <ul className={`flex  py-2.5 gap-6`}>
                                             <li>
                                                  <Link href='/'>Home</Link>
                                             </li>
                                             <li>
                                                  <Link href='/Frontend/ShopList'>Shop List</Link>
                                             </li>
                                             <li>
                                                  <Link href='/Frontend/Blog'>Blog</Link>
                                             </li>
                                             <li>
                                                  {/* products */}
                                                  <Link href='/Frontend/Shop'>shop</Link>
                                             </li>
                                             <li>
                                                  {/* Specials */}
                                                  <Link href='/Frontend/Cart'>Cart</Link>
                                             </li>
                                             <li>
                                                  <Link href='/Frontend/Checkout'>Checkout</Link>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                              {/*  */}
                              <div>
                                   <div className={`flex gap-6 items-center`}>
                                        <div className={`${styles.icons}`}><TfiReload size={20} /></div>
                                        <div className={`${styles.icons}`}>
                                             <Link href='/Frontend/WishList'><FiHeart size={25} /></Link>
                                        </div>
                                        <div className={`flex items-center ${styles.icons} flex gap-1 items-center`}>
                                             <div>
                                                  <AiOutlineShoppingCart size={30} />
                                             </div>
                                             <div>
                                                  <p className={`text-xs`}>Your Card</p>
                                                  <p className={`text-sm`}>$0.00</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </header>
     )
}
