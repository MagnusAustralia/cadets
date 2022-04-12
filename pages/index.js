import Image from "next/image";
import BgImg from "../public/placeholder.png";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="">
			<div className="top-0 left-0 absolute h-full w-full bg-BackG-400 "></div>
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
			{/* <div className="relative mt-[160vh] w-screen flex-col">
				<p className="float-right">View Full Calendar</p>
				<div className="justify">
					<h1>UP COMING EVENTS</h1>
				</div>
			</div> */}
			<footer>
				{/* <span className="relative mt-[160vh] float-right">View Calendar</span>
				<div className="mt-[180vh] border-black border-solid border-b-[10px] h-5 text-center w-[80vw] left-[-5vw]">
					<span className="px-10 bg-[#032d5a] text-4xl">UP COMING EVENTS</span>
				</div> */}
			</footer>

			{/* 
		<div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
			<span style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;">
			Section Title <!--Padding is optional-->
			</span>
		</div>
			*/}
		</div>
	);
}
