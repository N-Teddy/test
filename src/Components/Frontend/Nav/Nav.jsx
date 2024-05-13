import styles from './Nav.module.css'
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import Link from 'next/link';


export default function Nav() {
     return (
          <header className={`${styles.header} bg-white `}>
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
               <section className={`${styles.header_middle} pt-7 pb-6`}>
                    <div className={`container`}>
                         <div className={`${styles.row} text-sm flex justify-between items-center`}>
                              <div>
                                   <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/logo.png" alt="" />
                              </div>
                              <div className={`font-semibold text-base`}>
                                   <nav className={`${styles.mid_nav}`}>
                                        <ul className={`flex  py-4 gap-6`}>
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
                              <div className={`pl-7 font-thin  py-4 ${styles.log}`}>
                                   <p className={`flex gap-1`}>
                                        <span className='flex items-center'>
                                             <FaLock size={10} />  
                                             <Link href='/Frontend/LogIn'>Login</Link>
                                        </span>
                                        or             
                                        <span> 
                                             <Link href='/Frontend/Register'>Register</Link>
                                        </span>
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className={`${styles.header_bottom} pb-5`}>
                    <div className={`container`}>
                         <div className={`${styles.row} flex justify-between items-center`}>
                              <div>
                                   <button className={`flex items-center px-4 py-2 gap-3 bg-red-600 rounded-md`}>
                                        <GiHamburgerMenu />
                                        ALL CATEGORIES
                                        <IoIosArrowDown />
                                   </button>
                              </div>
                              <div>
                                   <div className={`flex mr-20`}>
                                        <div className={`py-2 pl-3 pr-8 flex items-center text-sm bg-gray-200 rounded-l-sm text-gray-500`}>All Categories</div>
                                        <div>
                                             <input className={`py-2 pl-3 text-gray-500 w-80`} type="text" placeholder='Search' name="" id="" />
                                        </div>
                                        <div className={`py-2 bg-red-600 flex items-center rounded-r-sm px-9`}>
                                             <IoSearch />
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div className={`flex gap-8`}>
                                        <div className={`${styles.icons}`}><TfiReload size={25}/></div>
                                        <div className={`${styles.icons}`}><FaHeart size={25} /></div>
                                        <div className={`flex items-center ${styles.icons}`}>
                                             <div><HiShoppingBag size={25} /></div>
                                             <p className={`text-sm pl-2`}>MY CARD <span className={`text-xs text-red-600 pl-2`}>-0.00€</span></p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </header>
     )
}
