import ContentCard from "../../component/ContentCard";
import Stack from "../../services/stackImp";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const blogCard = (props) => {
	console.log(props.blog);

	return (
		<>
			<Header />
			<ContentCard blog={props.blog} />;<h1>Display</h1>
			<Footer />
		</>
	);
};

export const getServerSideProps = async (context) => {
	const Query = Stack.ContentType("blog_kritika_cms").Query();
	try {
		let result = await Query.where("uid", `${context.params.id}	`)
			.includeReference(["related_links"])
			.toJSON()
			.find();

		return {
			props: {
				blog: result[0],
			},
		};
	} catch (err) {
		console.log("The error is", err);
		return err;
	}
};
export default blogCard;
