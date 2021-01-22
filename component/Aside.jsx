import Link from "next/link";

const Aside = (props) => {
	return (
		<div>
			{props.related_links.map((rel, index) => {
				return (
					<Link href={`${rel.uid}`} key={index}>
						<a>{rel.blog_heading}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default Aside;
