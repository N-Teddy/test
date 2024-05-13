import React from 'react'
import styles from './NewsLetter.module.css'
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook, FaPinterest, FaGooglePlusG, FaPaperPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function NewsLetter() {
     return (
          <section>
               <div className={`py-10 ${styles.main}`}>
                    <div className={`${styles.container}`}>
                         <div className={`flex justify-between items-center`}>
                              <div className={`flex gap-4 w-80`}>
                                   <div>
                                        <FaPaperPlane size={40}/>
                                   </div>
                                   <div>
                                        <p className={`text-2xl font-bold`}>Signup For Newsletter</p>
                                        <p className={`text-sm`}>We’ll never share your email address with a third-party.</p>
                                   </div>
                              </div>
                              <div className={`flex mr-28`}>
                                   <div>
                                        <input type="text" className={`py-2 text-md w-80 pl-3 text-gray-500 rounded-l-sm`} placeholder='Your email address' />
                                   </div>
                                   <div>
                                        <button className={`bg-red-600 py-2 rounded-r-sm text-md px-5`}>Subscribe</button>
                                   </div>
                              </div>
                              <div className={`flex gap-6 items-center ${styles.icon_container}`}>
                                   <span className={`${styles.icons}`}>
                                        <FaFacebook size={25}/>
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
               </div>
          </section>
     )
}
