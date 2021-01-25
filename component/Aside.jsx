import Link from "next/link";

const Aside = (props) => {
	return (
		<>
			{props.related_links.map((rel, index) => {
				return (
					<Link href={`${rel.uid}`} key={index}>
						<a>{rel.blog_heading}</a>
					</Link>
				);
			})}
		</>
	);
};

export default Aside;
