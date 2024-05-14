import styles from './Bottom.module.css'

export default function Bottom() {
     return (
          <section className='container'>
               <div className={`${styles.copyright} text-sm text-gray-700 items-center flex justify-between py-2 mt-6`}>
                    <div >
                         <p>eMarket © 2024 Demo Store. All Rights Reserved. Designed by <span className={`text-red-600`}>Smartaddons.Com</span></p>
                    </div>
                    <div className={`flex gap-2`}>
                         <span>Payment Method:</span>
                         <img src="https://uminex.kutethemes.net/dokan/wp-content/uploads/sites/3/2023/03/01-payment.svg" alt="" />
                    </div>
               </div>
          </section>
     )
}
