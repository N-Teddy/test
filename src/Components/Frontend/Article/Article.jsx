import React from 'react'
import styles from './Article.module.css'
import Link from 'next/link'
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

export default function Article() {
  return (
      <section className={`mb-8 flex`}>
          <div className={`${styles.image}`}>
              <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/blog/7.jpg" alt="" />
          </div>
          <div className={`${styles.description} pl-5 `}>
              <div className={`text-base font-semibold text-gray-600 mb-3`}>
                  <Link href='/'>Duis autem vel eum tempor invidunt ut labore et</Link>
              </div>
              <div className={`pb-3 text-gray-400 flex gap-10 border-b border-0 border-solid border-gray-300`}>
                  <span className={`${styles.author} flex gap-3 items-center text-xs`}>
                      <IoPersonCircleOutline size={20} />
                      <p>Posted by ngangman teddy</p>
                  </span>
                  <span className={`${styles.comment_count} flex items-center gap-3 text-xs`}>
                      <AiOutlineMessage size={20} />
                      comments
                  </span>
              </div>
              <p className={`text-sm break-words mt-1 mb-4 leading-7 text-gray-600`}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu...
              </p>
              <div className={`text-sm text-red-500`}>
                  Read More
              </div>
          </div>
      </section>
  )
}
