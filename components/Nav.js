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
		<div className="absolute w-screen h-32 left-0 top-0 z-0 bg-sky-500">
			<h1 className="text-center py-10 text-3xl font-bold text-gray-50">
				229 Squadron
			</h1>
			<div className={styles.nav} className="absolute top-5 right-5">
				<div className="relative inline-block text-right">
					<Menu>
						<Menu.Button className="inline-flex justify-center w-50px rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
							<GiHamburgerMenu />
						</Menu.Button>
						<Menu.Items>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/">Home</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/calendar">Calendar</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/media">Media</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/staff">Staff</MyLink>
							</Menu.Item>
							<Menu.Item className="text-gray-700 block px-4 py-2 text-lg bg-gray-50">
								<MyLink href="/contact">Contact</MyLink>
							</Menu.Item>
						</Menu.Items>
					</Menu>
				</div>
			</div>
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

{
	/* <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

//   <!--
//     Dropdown menu, show/hide based on menu state.

//     Entering: "transition ease-out duration-100"
//       From: "transform opacity-0 scale-95"
//       To: "transform opacity-100 scale-100"
//     Leaving: "transition ease-in duration-75"
//       From: "transform opacity-100 scale-100"
//       To: "transform opacity-0 scale-95"
//   -->
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
          Sign out
        </button>
      </form>
    </div>
  </div>
</div> */
}
