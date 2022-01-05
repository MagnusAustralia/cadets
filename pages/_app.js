import Layout from "../components/Layout";
import styles from "../styles/Nav.module.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} className={styles.else} />
		</Layout>
	);
}
