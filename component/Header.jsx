import Link from "next/link";
import styles from "../styles/Header.module.css";
function Header() {
	return (
		<div className={styles["header-container"]}>
			<img
				src="https://thumbs.dreamstime.com/z/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg"
				className={styles["logo-image"]}
			/>
			<div className={styles["home-container"]}>
				<Link href="/">HOME</Link>
			</div>
		</div>
	);
}

export default Header;
