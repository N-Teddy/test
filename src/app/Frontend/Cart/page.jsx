import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'
import Cart from '@/Components/Frontend/Cart/Cart'


export default function page() {
	return (
		<main className={`main`}>
			<Nav />
			<section className={`my-10`}>
				<div>
					<PageTitle />
				</div>
				<section className={`${styles.container}`}>
					<div className={`flex justify-between`}>
						<section className={`bg-white rounded-md py-2`}>
							<form action="">
								<table className={`${styles.table}`}>
									<thead>
										<tr className={`w-full text-sm px-4 font-bold `}>
											<th className={`py-4 px-4 text-left ${styles.image}`}>IMAGE</th>
											<th className={`py-4 px-4 text-left w-64 ${styles.name}`}>PRODUCT NAME</th>
											<th className={`py-4 px-4 text-left ${styles.price}`}>PRICE</th>
											<th className={`py-4 px-4 text-left ${styles.quantity}`}>QUANTITY</th>
											<th className={`py-4 px-4 text-left ${styles.total}`}>SUBTOTAL</th>
											<th className={`py-4 px-4 text-left ${styles.remouve}`}></th>
										</tr>
									</thead>
									<tbody>
										<Cart />
										<Cart />
										<Cart />
										<tr>
											<td>
												<div></div>
												<button className={`w-full text-xs bg-blue rounded-full py-3.5 px-7 text-white font-bold mt-3`}>UPDATE CART</button>
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</section>
						<section>
							<div className={` py-7 px-6 rounded-md ${styles.totals} bg-white`}>
								<h2 className={`pb-3 text-base font-semibold ${styles.h2}`}>CART TOTALS</h2>
								<table className={`w-full`}>
									<tbody>
										<tr className={`${styles.tr}`}>
											<th className={`py-5 pr-2.5 text-left`}>Subtotal</th>
											<td className={`py-5 pl-2.5 text-right color_blue font-semibold`}>
												<span>$</span>
												<span>980.00</span>
											</td>
										</tr>
										<tr className={`${styles.tr}`}>
											<th className={`py-5 pr-2.5 text-left break-words`}>
												<span>Shipping:</span>
												<div>Ho Chi Minh</div>
											</th>
											<td className={`py-5 pl-2.5 text-right`}>
												<span>Shipping to<span>CA</span></span>
												<form action="">
													Change address
												</form>
											</td>
										</tr>
										<tr className={`${styles.tr}`}>
											<th className={`py-5 pr-2.5 text-left`}>Total</th>
											<td className={`py-5 pl-2.5 text-right text-red-600 font-semibold`}>
												<span>$</span>
												<span>995.00</span>
											</td>
										</tr>
									</tbody>
								</table>
								<div>
									<button className={`w-full text-xs bg-blue rounded-full py-3.5 text-white font-bold mt-3`}>PROCEED TO CHECKOUT</button>
								</div>
							</div>
						</section>
					</div>
				</section>
			</section>
			<Footer />
		</main>
	)
}
