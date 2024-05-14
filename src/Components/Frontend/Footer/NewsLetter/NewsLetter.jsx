import React from 'react'
import styles from './NewsLetter.module.css'
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook, FaPinterest, FaGooglePlusG, FaPaperPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function NewsLetter() {
     return (
          <section>
               <div className={`${styles.main}`}>
                    <div className={`flex flex-col gap-3`}>
                         <div className={`flex gap-4`}>
                              <div>
                                   <FaPaperPlane size={25} />
                              </div>
                              <div>
                                   <p className={`text-sm text-gray-800 font-bold  ${styles.h3} relative mb-6 pb-2`}>SIGN UP TO NEWSLETTER</p>
                              </div>
                         </div>
                         <div>
                              <p className={`text-sm`}>Join 20.000+ subscribers and get a new discount coupon on every Saturday. Updates information on Sales and Offers.</p>
                         </div>
                         <div className={`flex gap-2`}>
                              <div>
                                   <input type="text" className={`py-2 b-color border-1 border-solid text-md rounded-3xl w-60 pl-3 text-gray-500`} placeholder='Your email address' />
                              </div>
                              <div>
                                   <button className={`bg-blue py-2 text-white rounded-3xl text-md px-5`}>Subscribe</button>
                              </div>
                         </div>
                         <div className={`flex gap-6 items-center justify-center ${styles.icon_container}`}>
                              <span className={`${styles.icons}`}>
                                   <FaFacebook size={28} />
                              </span>
                              <span className={`${styles.icons}`}>
                                   <BsTwitterX size={25} />
                              </span>
                              <span className={`${styles.google}`}>
                                   <FaGooglePlusG size={35} />
                              </span>
                              <span>
                                   <FaPinterest size={25} />
                              </span>
                         </div>
                    </div>
               </div>
          </section>
     )
}
