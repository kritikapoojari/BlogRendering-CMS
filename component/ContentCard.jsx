import Aside from "../component/Aside";
import Link from "next/link";
import styles from "../styles/ContentCard.module.css";

const ContentCard = (props) => {
	return props.blog.length === 0 ? (
		<h1>Loading</h1>
	) : (
		props.blog.map((block, index) => {
			return (
				<div className={styles["card-conainer"]}>
					<title key={index}>{block.title}</title>
					<img
						src={block.blog_image.url}
						className={styles["image-container"]}
					/>
					<h1 className={styles["content-heading"]}>
						{block.blog_heading}
					</h1>
					<p className={styles["content"]}>{block.blog_content}</p>;
					<Link href={`/blogs/${block.realted_links}`}>
						<a className={styles["card"]}>{block.blog_heading}</a>
					</Link>
				</div>
			);
		})
	);
};
export default ContentCard;
