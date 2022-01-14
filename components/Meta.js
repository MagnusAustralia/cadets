import Head from "next/head";

const Meta = ({ title, keywords, description, favicon }) => {
	return (
		<Head>
			<link rel="icon" href={favicon} className="h-2" />
			<meta name="viewport" content="width=device-width initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Cadets 229",
	keywords:
		"cadets, squadron, ATC, air, plane, activity, club, farnham, military",
	description: "A place to learn more about squadron 229",
	favicon: "/Favico.ico",
};

export default Meta;
