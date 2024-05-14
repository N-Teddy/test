
import styles from './Footer.module.css'
import Mid from './Mid/Mid'
import Bottom from './Bottom/Bottom'

export default function Footer() {
	return (
		<div className={`bg-white mt-3`}>
			<Mid />
			<Bottom />
		</div>
	)
}
