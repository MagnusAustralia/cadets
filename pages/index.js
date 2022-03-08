import Image from "next/image";
import BgImg from "../public/placeholder.png";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="">
			<div className="z-0 top-0 right-0 absolute">
				<Image src={BgImg} alt="Background Image" className="image" />
			</div>
			<div className="mt-[570px]"></div>
			<div className={styles.slantedDiv}>
				<div className="grid gap-1/3 p-4">
					<h1>Get Social</h1>
					<div className="">
						<p>Follow Us On</p>
					</div>
				</div>
				<hr className="border-[2px] h-0" />
				<div className="flex gap-12 p-6">
					<section>
						<h1>@229 Sqn</h1>
						<br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem
						doloribus itaque saepe, mollitia cum iste aspernatur qui accusamus
						eos rerum molestiae, temporibus, dolores quo dolore quia fuga?
						Blanditiis odit aspernatur velit odio voluptates, molestias optio
						commodi ex atque illum mollitia doloribus, veniam unde beatae
						pariatur assumenda! Hic, labore quam!
					</section>
					<section>
						<h1>@229 Sqn</h1>
						<br />
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
						necessitatibus possimus nobis id, sed iste. Esse doloremque ex
						accusantium beatae vero autem impedit dolore, molestias unde minima
						voluptates, illo, ipsam est qui accusamus nobis! Ex obcaecati
						voluptatem cumque suscipit dicta, voluptatum sequi recusandae.
						Quisquam provident architecto fugit incidunt ducimus ratione!
					</section>
				</div>
			</div>
			<div className="mt-20">
				<h1>UP COMING EVENTS</h1>
			</div>
		</div>
	);
}
