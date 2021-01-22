import Aside from "../component/Aside";
import Link from "next/link";
import styles from "../styles/ContentCard.module.css";
const ContentCard = (props) => {
	return props.blog.length === 0 ? (
		<h1>Loading</h1>
	) : (
		props.blog.map((blog) => {
			return (
				<>
					<img
						src={blog.blog_image.url}
						className={styles["image-container"]}
					/>
					<h1 className={styles["content-heading"]}>
						{blog.blog_heading}
					</h1>
					<p className={styles["content"]}>{blog.blog_content}</p>;
					<Aside related_links={blog.related_links} />;
				</>
			);
		})
	);
};
export default ContentCard;
