import styles from "../styles/Footer.module.css";

function Footer() {
	return (
		<div className={styles["footer-container"]}>
			<div className={styles["footer-text"]}>
				<p>Copyright © 2021 All Rights Reserved.</p>
			</div>
			<div className={styles["footer-links"]}>
				<ul className={styles["link-text"]}>
					<li className={styles["text"]}>
						<img src="https://img.icons8.com/carbon-copy/50/000000/facebook-new.png" />
					</li>
					<li className={styles["text"]}>
						<img src="https://img.icons8.com/carbon-copy/100/000000/instagram-new.png" />
					</li>
					<li className={styles["text"]}>
						<img src="https://img.icons8.com/carbon-copy/100/000000/twitter.png" />
					</li>
					<li className={styles["text"]}>
						<img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
