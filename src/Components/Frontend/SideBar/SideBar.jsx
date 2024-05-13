import styles from './SideBar.module.css'
import { IoMdMenu, IoIosCart, IoMdPerson, IoMdSearch } from "react-icons/io";
import { LuArrowUpCircle } from "react-icons/lu";

export default function SideBar() {
     return (
          <section className={`fixed  right-0 top-50 z-50 text-white`}>
               <div className={`flex flex-col items-end`}>
                    <div className={`flex h-11 ${styles.icon_container}`}>
                         <span className={`${styles.description} flex items-center text-base px-3  bg-red-500 h-full`}>Category</span>
                         <div className={`${styles.icon} flex items-center bg-red-500 px-2 h-full`}> <IoMdMenu size={24}/> </div>
                    </div>
                    <div className={`flex h-11 ${styles.icon_container}`}>
                         <span className={`${styles.description} flex items-center text-base px-3  bg-red-500 h-full`}>Cart</span>
                         <div className={`${styles.icon} flex items-center bg-red-500 px-2 h-full`}> <IoIosCart size={24}/>  </div>
                    </div>
                    <div className={`flex h-11 ${styles.icon_container}`}>
                         <span className={`${styles.description} flex items-center text-base px-3  bg-red-500 h-full`}>Search</span>
                         <div className={`${styles.icon} flex items-center bg-red-500 px-2 h-full`}> <IoMdSearch size={24}/>  </div>
                    </div>
                    <div className={`flex h-11 ${styles.icon_container}`}>
                         <span className={`${styles.description} flex items-center text-base px-3  bg-red-500 h-full`}>Account</span>
                         <div className={`${styles.icon} flex items-center bg-red-500 px-2 h-full`}> <IoMdPerson size={24}/> </div>
                    </div>
                    <div className={`flex h-11 ${styles.icon_container}`}>
                         <span className={`${styles.description} flex items-center text-base px-3  bg-red-500 h-full`}>To top</span>
                         <div className={`${styles.icon} flex items-center bg-red-500 px-2 h-full`}>  <LuArrowUpCircle size={24}/> </div>
                    </div>
               </div>
          </section>
     )
}



