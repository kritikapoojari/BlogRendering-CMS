import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = (props) => {
	return (
		<div className={styles["blog-container"]}>
			{props.blogs.map((blog, index) => {
				return (
					<div key={index}>
						<img
							src={blog.blog_image.url}
							className={styles["blog-image"]}
						/>
						<Link href={`/blogs/${blog.uid}`}>
							<h1 className={styles["heading"]}>{blog.blog_heading}</h1>
						</Link>
						<p className={styles["blog"]}>{blog.blog_content}</p>
					</div>
				);
			})}
		</div>
	);
};

export default BlogCard;
