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
		<div className="absolute w-full h-32 left-0 top-0 z-0 bg-sky-500">
			<div className={styles.title}>
				<h1 className="sm:text-left md:text-center py-10 text-3xl font-bold text-gray-50">
					229 Squadron
				</h1>
			</div>
			<div className="absolute top-5 right-5 px-2">
				<div className="relative inline-block text-right">
					<Menu>
						<Menu.Button className="inline-flex justify-center w-50px px-4 py-4 text-gm font-medium text-gray-700 h-full">
							<GiHamburgerMenu
								color="white"
								fontSize="3em"
								className={styles.Button}
							/>
						</Menu.Button>
						<Menu.Items>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/">Home</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/what-we-do">What We Do</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/meet-the-team">Meet The Team</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/merchandise">Merchandise</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/contact-us">Contact Us</MyLink>
							</Menu.Item>
						</Menu.Items>
					</Menu>
				</div>
			</div>
		</div>
	);
}

export default Nav;
