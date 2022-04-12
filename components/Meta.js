import Head from "next/head";
import { useState, useEffect } from "react";

const Meta = ({ title, keywords, description, favicon }) => {
	return (
		<Head>
			<link rel="icon" href={favicon} type="image/x-icon" />
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
	favicon: "/Favico2.ico",
};

export default Meta;
