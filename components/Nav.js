import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

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
		<div className={styles.nav}>
			<Menu>
				<Menu.Button>
					<GiHamburgerMenu />
				</Menu.Button>
				<Menu.Items>
					<Menu.Item>
						<MyLink href="/">Home</MyLink>
					</Menu.Item>
					<Menu.Item>
						<MyLink href="/calendar">Calendar</MyLink>
					</Menu.Item>
					<Menu.Item>
						<MyLink href="/media">Media</MyLink>
					</Menu.Item>
					<Menu.Item>
						<MyLink href="/staff">Staff</MyLink>
					</Menu.Item>
					<Menu.Item>
						<MyLink href="/contact">Contact</MyLink>
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</div>
	);
}

// const Nav = () => {
// 	return (
// 		<nav>
// 			<div className={styles.nav}>
// 				<ul className={styles.list}>
// 					<li className={styles.li}>
// 						<Link href="/">Home</Link>
// 					</li>
// 					<li className={styles.li}>
// 						<Link href="/calendar">Calendar</Link>
// 					</li>
// 					<li className={styles.li}>
// 						<Link href="/media">Media</Link>
// 					</li>
// 					<li className={styles.li}>
// 						<Link href="/staff">Staff</Link>
// 					</li>
// 					<li className={styles.li}>
// 						<Link href="/contact">Contact</Link>
// 					</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

export default Nav;
