import Head from "next/head";

const Meta = ({ title, keywords, description, favicon }) => {
	return (
		<Head>
			<link rel="icon" href={favicon} />
			<meta name="viewport" content="width=device-width initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "William Portfolio",
	keywords: "portfolio, projects, learn numbers, math, education, pi",
	description: "A portfolio to link to all of my projects",
	favicon: "/dark-mode.svg",
};

export default Meta;
