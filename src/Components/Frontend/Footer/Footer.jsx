
import styles from './Footer.module.css'
import NewsLetter from './NewsLetter/NewsLetter'
import Mid from './Mid/Mid'
import Bottom from './Bottom/Bottom'

export default function Footer() {
	return (
		<div>
			<NewsLetter />
			<Mid />
			<Bottom />
		</div>
	)
}
