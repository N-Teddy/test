import React from 'react'
import styles from './PageTitle.module.css'

export default function PageTitle() {
  return (
      <div className={`mb-10 flex justify-center ${styles.page_title}`}>
          <div>
              <h1 className={`font-bold text-4xl mb-6 ${styles.color}`}>Register</h1>
              <nav className={`text-xs text-center`}>Home / Register</nav>
          </div>
      </div>
  )
}
