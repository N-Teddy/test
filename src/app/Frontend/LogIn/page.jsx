import React from 'react'
import styles from './page.module.css'
import Nav from '@/Components/Frontend/Nav/Nav'
import Footer from '@/Components/Frontend/Footer/Footer'
import PageTitle from '@/Components/Frontend/PageTitle/PageTitle'

export default function page() {
	return (
		<main>
			<Nav />
			<section className={`my-10`}>
				<div>
					<PageTitle />
				</div>
				<section className={`${styles.container} flex justify-center`}>
					<div>
						<form action="" className={`${styles.form}`}>
								<div className={`${styles.form_row}`}>
									<label htmlFor="email">
										<p>Email</p>
										<input type="text" name="email" id="email" />
									</label>
								</div>
								<div className={`${styles.form_row}`}>
									<label htmlFor="password">
										<p>Password</p>
										<input type="text" name="password" id="password" />
									</label>
								</div> 
								<div className={`flex justify-between text-sm text-gray-600`}>
									<div className={`flex gap-2 items-center`}>
										<input type="checkbox" name='remember' />
										<label htmlFor="remember">Remember me</label>
									</div>
									<div className={`font-semibold`}>Last your Password?</div>
								</div>
								<div>
									<button className={`${styles.button}`}>LOG IN</button>
								</div>
						</form>
					</div>
				</section>
			</section>
			<Footer />
		</main>
	)
}
