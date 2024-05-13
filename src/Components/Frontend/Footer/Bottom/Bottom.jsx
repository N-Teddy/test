import styles from './Bottom.module.css'

export default function Bottom() {
  return (
       <section>
            <div className={`${styles.container} flex justify-center`}>
                 <div>
                      <img src="https://opencart4.magentech.com/themes/so_emarket/image/catalog/demo/payment/payment.png" alt="" />
                 </div>
            </div>
            <div className={`${styles.copyright} text-sm text-white flex justify-center py-5 mt-6`}>
                 <div >
                      <p>eMarket © 2024 Demo Store. All Rights Reserved. Designed by <span className={`text-red-600`}>Smartaddons.Com</span></p>
                 </div>
            </div>
    </section>
  )
}
