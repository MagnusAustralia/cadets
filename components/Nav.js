import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

function Nav() {
	return (
		<div className={styles.Font}>
			<div className="absolute w-full h-32 left-0 top-0 z-10 pb-64 text-5xl flex px-3 py-3 gap-[250px]">
				<MyLink className="active:file:bg-BackG-300" href="/">
					<h1>Home</h1>
				</MyLink>
				<MyLink href="/what-we-do">
					<h1>What We Do</h1>
				</MyLink>
				<MyLink href="meet-the-team">
					<h1>Meet The Team</h1>
				</MyLink>
				<MyLink href="merchandise">
					<h1>Merchandise</h1>
				</MyLink>
				<MyLink href="contact-us">
					<h1>Contact Us</h1>
				</MyLink>
			</div>
		</div>
	);
}

export default Nav;
