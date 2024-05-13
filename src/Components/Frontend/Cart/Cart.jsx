import React from 'react'
import styles from './Cart.module.css'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function Cart() {
  return (
      <tr className={`${styles.product}`}>
          <td className={`py-4 px-4 ${styles.image}`}>
              <img src="https://uminex.kutethemes.net/dokan/wp-content/uploads/sites/3/2023/03/products_3_2.jpg" width={70} height={70} alt="" />
          </td>
          <td className={`py-4 px-4 text-left w-64 ${styles.name}`}>
              <p className={`text-sm font-semibold break-words`}>Apple iPad Air 4 10.9-inch Wi-Fi 256GB</p>
              <div className={`text-xs flex gap-1 text-gray-500`}>
                  <p>Vendor:</p>
                  <p>OvicSoft</p>
              </div>
          </td>
          <td className={`py-4 px-4 text-blue-600 font-semibold text-base ${styles.price}`}>
              <span>$</span>
              <span>628.00</span>
          </td>
          <td className={`py-4 px-4 ${styles.quantity}`}>
              <div className={`flex relative w-24`}>
                  <span className={`${styles.add} absolute bottom-3 left-1`}>
                      <GoPlus size={20} />
                  </span>
                  <input type="number" className={`text-gray-700 text-sm py-3 px-9 rounded-full w-24 border border-solid`} />
                  <span className={`${styles.substract} absolute bottom-3 right-1`}>
                      <FiMinus size={20} />
                  </span>
              </div>
          </td>
          <td className={`py-4 px-4 text-blue-600 font-semibold text-base ${styles.total}`}>
              <span>$</span>
              <span>2,512.00</span>
          </td>
          <td className={`py-4 px-4 ${styles.remouve}`}></td>
      </tr>
  )
}
