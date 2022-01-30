import React from "react";
import styles from "../styles/Contact.module.css";
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
			<section>
				<div></div>
				<div>
					<div className="">
						<h1>Located At</h1>
						<p>
							Territorial Army Center,
							<br />
							Guildford RD, Farnham
							<br />
							GU9 9QB
						</p>
					</div>
					<br />
					<div className="">
						<h1>Parade Evenings</h1>
						<p>Tuesday 19:00 - 21:30</p>
						<p>Friday 19:00 - 21:30</p>
					</div>
				</div>
			</section>
			<section className={styles.slantedDiv}>
				<hr className="border-[2px] h-0" />
				<div className="flex justify-evenly p-6">
					<section>
						<h1>Contact Us</h1>
						<div className="flex">
							<a className="self-center">
								<FaEnvelope />
							</a>
							<span>229@aircadets.ord</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaPhoneAlt />
							</a>
							<span>01252721810</span>
						</div>
					</section>
					<section>
						<h1>Social Media</h1>
						<div className="flex">
							<a className="self-center">
								<FaFacebookSquare />
							</a>
							<span>229 (Farnham) sqn atc</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaInstagram />
							</a>
							<span>@229sqn</span>
						</div>
						<div className="flex">
							<a className="self-center">
								<FaTwitter />
							</a>
							<span>@229sqn</span>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default contact;
