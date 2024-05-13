import styles from './Mid.module.css'
import { GrMap } from "react-icons/gr";
import { PiHeadsetFill } from "react-icons/pi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";
// 
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import { CiDiscount1 } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function Mid() {
     return (
          <section>
               <div className={`${styles.container}`}>
                    <div className={`${styles.row} flex pt-14 text-sm font-normal text-gray-500`}>
                         <div className={`${styles.ends}`}>
                              <section className={``}>
                                   <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/logo-footer.png" alt="" />
                                   <div className={`mt-5`}>
                                        <ul className={`flex flex-wrap gap-3`}>
                                             <li className={`flex items-center gap-4`}>
                                                  <GrMap size={50} />
                                                  San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SPL, Mexico
                                             </li>
                                             <li className={`flex items-center gap-4`}>
                                                  <PiHeadsetFill size={30} />
                                                  (+0214)0 315 215 - (+0214)0 315 215
                                             </li>
                                             <li className={`flex items-center gap-4`}>
                                                  <SlEnvolopeLetter size={30} />
                                                  Contact@Opencartworks.Com
                                             </li>
                                             <li className={`flex items-center gap-4`}>
                                                  <CiClock1 size={30} />
                                                  Open Time: 8:00AM - 6:00PM
                                             </li>
                                        </ul>
                                   </div>
                              </section>
                         </div>
                         <div className={`flex`}>
                              <div className={`${styles.ul}`}>
                                   <ul>
                                        <h3 className={`text-sm text-gray-800 font-bold ${styles.h3} relative mb-6 pb-2`}>INFORMATION</h3>
                                        <li>About Us</li>
                                        <li>FAQ</li>
                                        <li>Warranty And Services</li>
                                        <li>Support 24/7 page</li>
                                        <li>Product Reistration</li>
                                        <li>Product Support</li>
                                   </ul>
                              </div>
                              <div className={`${styles.ul}`}>
                                   <ul >
                                        <h3 className={`text-sm text-gray-800 font-bold ${styles.h3} relative mb-6 pb-2`}>MY ACCOUNT</h3>
                                        <li>Brands</li>
                                        <li>Gift Certificates</li>
                                        <li>Affiliates</li>
                                        <li>Specials</li>
                                        <li>FAQs</li>
                                        <li>Custom Link</li>
                                   </ul>
                              </div>
                              <div className={`${styles.ul}`}>
                                   <ul>
                                        <h3 className={`text-sm text-gray-800 font-bold ${styles.h3} relative mb-6 pb-2`}>SERVICES</h3>
                                        <li>Contact Us</li>
                                        <li>Returns</li>
                                        <li>Support</li>
                                        <li>Site Map</li>
                                        <li>Customer Services</li>
                                        <li>Custom Links</li>
                                   </ul>
                              </div>
                         </div>
                         <div className={`${styles.ends}`}>
                              <section className={`pl-2`}>
                                   <div >
                                        <h3 className={`text-sm text-gray-800 font-bold ${styles.h3} relative mb-6 pb-2`}>INSTAGRAM GALLERY</h3>
                                   </div>
                                   <div className={`flex gap-1`}>
                                        <div>
                                             <img src="https://opencart4.magentech.com/themes/gallery_themes/Blog_1.jpg" width={270} alt="" />
                                        </div>
                                        <div className={`flex flex-wrap gap-1`}>
                                             <div>
                                                  <img src="https://opencart4.magentech.com/themes/gallery_themes/Blog_2.jpg" width={61} height={43} alt="" />
                                             </div>
                                             <div>
                                                  <img src="https://opencart4.magentech.com/themes/gallery_themes/Blog_3.jpg" width={61} height={43} alt="" />
                                             </div>
                                             <div>
                                                  <img src="https://opencart4.magentech.com/themes/gallery_themes/Blog_4.jpg" width={61} height={43} alt="" />
                                             </div>
                                             <div>
                                                  <img src="https://opencart4.magentech.com/themes/gallery_themes/Blog_5.jpg" width={61} height={43} alt="" />
                                             </div>
                                        </div>
                                   </div>
                              </section>
                         </div>
                    </div>
               </div>
               <div className={`${styles.container}`}>
                    <div className={`px-4 py-6 my-6 flex border border-solid border-gray-400`}>
                         <section className={`flex flex-col gap-1 items-center w-56 ${styles.quality} relative`}>
                              <div><CiDeliveryTruck size={25}/></div>
                              <div className={`text-sm text-center text-gray-500 w-56`}>
                                   <p className={`font-semibold`}>FAST DELIVERIY</p>
                                   <p>Deliver in 24 hours max!</p>
                              </div>
                         </section>
                         <section className={`flex flex-col gap-1 items-center w-56 ${styles.quality} relative`}>
                              <div><TfiWallet size={25}/></div>
                              <div className={`text-sm text-center text-gray-500`}>
                                   <p className={`font-semibold`}>SAFE PAYMENT</p>
                                   <p>100% secure payment</p>
                              </div>
                         </section>
                         <section className={`flex flex-col gap-1 items-center w-56 ${styles.quality} relative`}>
                              <div><CiDiscount1 size={25} /></div>
                              <div className={`text-sm text-center text-gray-500`}>
                                   <p className={`font-semibold`}>ONLINE DISCOUNT</p>
                                   <p>Add multi-buy discount</p>
                              </div>
                         </section>
                         <section className={`flex flex-col gap-1 items-center w-56 ${styles.quality} relative`}>
                              <div><LuMessagesSquare size={25}/></div>
                              <div className={`text-sm text-center text-gray-500`}>
                                   <p className={`font-semibold`}>HELP CENTER</p>
                                   <p>Dedicated 24/7 support</p>
                              </div>
                         </section>
                         <section className={`flex flex-col gap-1 items-center w-56`}>
                              <div><HiOutlineClipboardDocumentList size={25}/></div>
                              <div className={`text-sm text-center text-gray-500`}>
                                   <p className={`font-semibold`}>CURATED ITEMS</p>
                                   <p>From handpicking sellers</p>
                              </div>
                         </section>
                    </div>
               </div>
          </section>
     )
}


{/* <ul className={`pt-11 pb-4 mt-3 flex justify-center flex-wrap text-sm text-gray-500 ${styles.bottom_ul}`}>
     <li>Online Shopping</li>
     <li>Promotions</li>
     <li>Privacy Policy</li>
     <li>Site Map</li>
     <li>Orders and Returns</li>
     <li>Help</li>
     <li>Contact Us</li>
     <li>Support</li>
     <li>Most Popular</li>
     <li>New Arrivals</li>
     <li>Special Products</li>
     <li>Manufacturers</li>
     <li>Shipping</li>
     <li>Payments</li>
     <li>Returns</li>
     <li>Refunds</li>
     <li>Warantee</li>
     <li>Promotions</li>
     <li>Customer Service</li>
     <li>Our Store</li>
     <li>Discount</li>
     <li>Checkout</li>
</ul> */}