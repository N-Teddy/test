import React from 'react'
import styles from './WishList.module.css'
import Link from 'next/link'
import { IoEyeOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

export default function WishList() {
  return (
    <tr className={`${styles.ListItem}`}>
      <td className={`${styles.image} py-4 px-2.5 `}>
        <img src="https://uminex.kutethemes.net/dokan/wp-content/uploads/sites/3/2023/03/products_25_4-300x300.jpg" alt="" />
      </td>
      <td className={`${styles.name} py-4 px-2.5`}>
        <div className={`flex gap-2 text-sm font-semibold items-center`}>
          <Link href='/'>Logitech G203 Wired 8000 DPI For PC/Mac</Link>
          <span><IoEyeOutline size={20} /></span>
        </div>
      </td>
      <td className={`${styles.price} text-center py-4 px-2.5`}>
        <span>$200.00</span>
      </td>
      <td className={`${styles.status} text-center py-4 px-2.5 text-green-500`}>
        <span>In Stock</span>
      </td>
      <td className={`${styles.add} flex flex-wrap justify-center py-4 px-2.5`}>
        <span className={`text-sm`}>Added on: May 15 2024 </span>
        <button className={`inline-block py-2 px-14 rounded-full text-white bg-blue font-semibold text-xs`}>ADD TO CART</button>
      </td>
      <td className={`${styles.remouve} py-4 px-2.5`}>
        <TiDeleteOutline />
      </td>
    </tr>
  )
}
