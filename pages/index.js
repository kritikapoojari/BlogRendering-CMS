import Stack from "../services/stackImp";
import BlogCard from "../component/BlogCard";
import Footer from "../component/Footer";
import Header from "../component/Header";

const HomePage = (props) => {
	return (
		<div>
			<Header />
			<BlogCard blogs={props.blogs} />
			<Footer />
		</div>
	);
};

export const getServerSideProps = async () => {
	const Query = Stack.ContentType("blog_kritika_cms").Query();
	let result = await Query.where("title").toJSON().find();

	return {
		props: {
			blogs: [...result[0]],
		},
	};
};

export default HomePage;
