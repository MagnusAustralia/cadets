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
	const router = useRouter();

	var activated = styles.active;

	return (
		<nav className="absolute w-full h-32 left-0 top-0 z-10 pb-64 text-5xl flex px-3 py-3 justify-evenly">
			<MyLink href="/">
				<h1
					className={
						router.pathname == "/"
							? "active px-[10px] py-[10px]"
							: "px-[10px] py-[10px]"
					}>
					Home
				</h1>
			</MyLink>
			<MyLink href="/what-we-do">
				<h1
					className={
						router.pathname == "/what-we-do"
							? "active px-[10px] py-[10px]"
							: "px-[10px] py-[10px]"
					}>
					What We Do
				</h1>
			</MyLink>
			<MyLink href="meet-the-team">
				<h1
					className={
						router.pathname == "/meet-the-team"
							? "active px-[10px] py-[10px]"
							: "px-[10px] py-[10px]"
					}>
					Meet The Team
				</h1>
			</MyLink>
			<MyLink href="merchandise">
				<h1
					className={
						router.pathname == "/merchandise"
							? "active px-[10px] py-[10px]"
							: "px-[10px] py-[10px]"
					}>
					Merchandise
				</h1>
			</MyLink>
			<MyLink href="contact-us">
				<h1
					className={
						router.pathname == "/contact-us"
							? "active px-[10px] py-[10px]"
							: "px-[10px] py-[10px]"
					}>
					Contact Us
				</h1>
			</MyLink>
		</nav>
	);
}

export default Nav;

// import ActiveLink from "./ActiveLink";

// const Nav = () => {
// 	<nav>
// 		<ul className="nav">
// 			<li>
// 				<ActiveLink activeClassName={styles.active} href="/">
// 					<a className="">Home</a>
// 				</ActiveLink>
// 			</li>
// 			<li>
// 				<ActiveLink activeClassName={styles.active} href="/contact-us">
// 					<a className="">Contact</a>
// 				</ActiveLink>
// 			</li>
// 			{/* <li>
// 				<ActiveLink activeClassName={styles.active}>
// 					<a href=""></a>
// 				</ActiveLink>
// 			</li>
// 			<li>
// 				<ActiveLink activeClassName={styles.active}>
// 					<a href=""></a>
// 				</ActiveLink>
// 			</li>
// 			<li>
// 				<ActiveLink activeClassName={styles.active}>
// 					<a href=""></a>
// 				</ActiveLink>
// 			</li> */}
// 		</ul>
// 	</nav>;
// };

// export default Nav;
