import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import BgImg from "../public/placeholder.png";
import {
	FaEnvelope,
	FaPhoneAlt,
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

const contact = () => {
	return (
		<div>
			<section className="flex gap-24">
				<div>
					<Image
						src={BgImg}
						alt="Background Image"
						height="640"
						width="1000"
						className="mb-[256] rounded-3xl"
					/>
				</div>
				<div>
					<div className="font-bold text-5xl leading-loose">
						<h1>Located At</h1>
						<p className=" text-4xl leading-loose">
							Territorial Army Center,
							<br />
							Guildford RD, Farnham
							<br />
							GU9 9QB
						</p>
					</div>
					<br />
					<div className="font-bold text-5xl">
						<h1 className=" text-5xl leading-loose">Parade Evenings</h1>
						<p className=" text-4xl leading-loose">Tuesday 19:00 - 21:30</p>
						<p className=" text-4xl leading-loose">Friday 19:00 - 21:30</p>
					</div>
				</div>
			</section>
			<section className={styles.slantedDiv}>
				<hr className="border-[2px] h-0" />
				<div className="flex justify-evenly p-6">
					<section>
						<h1 className="text-5xl">Contact Us</h1>
						<br />
						<div className="flex">
							<a className="self-center">
								<FaEnvelope size={170} />
							</a>
							<span className="self-center text-5xl">229@aircadets.ord</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaPhoneAlt size={170} />
							</a>
							<span className="self-center text-5xl">01252721810</span>
						</div>
					</section>
					<section>
						<h1 className="text-5xl">Social Media</h1>
						<br />
						<div className="flex">
							<a className="self-center">
								<FaFacebookSquare size={170} />
							</a>
							<span className="self-center text-5xl">
								229 (Farnham) sqn atc
							</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaInstagram size={170} />
							</a>
							<span className="self-center text-5xl">@229sqn</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaTwitter size={170} />
							</a>
							<span className="self-center text-5xl">@229sqn</span>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default contact;
