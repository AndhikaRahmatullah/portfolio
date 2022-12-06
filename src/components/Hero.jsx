import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	const variantsHero = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.7,
			},
		},
	};

	const variantsHeroChild = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};

	const variantsHero2 = {
		hidden: {
			opacity: 1,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 3,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
	};

	const variantsHeroChild2 = {
		hidden: {
			x: -500,
		},
		show: {
			x: 0,
			transition: {
				type: "spring",
				damping: 5,
				stiffness: 30,
				restDelta: 0.001,
				ease: "easeIn",
			},
		},
	};
	const variantsHero3 = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 5,
				when: "beforeChildren",
				staggerChildren: 1,
			},
		},
	};

	const variantsHeroChild3 = {
		hidden: {
			opacity: 0,
			x: 700,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 5,
				stiffness: 30,
				restDelta: 0.001,
				ease: "easeIn",
			},
		},
	};

	return (
		<div className="transition-all duration-500 dark:bg-dark">
			<div
				className="container flex flex-wrap items-center justify-center gap-5 pt-20 lg:justify-between lg:pt-32 lg:pb-16"
				id="home">
				<div className="flex flex-col items-center justify-center gap-6 px-[100px] md:items-start">
					<motion.div
						variants={variantsHero}
						initial="hidden"
						animate="show"
						className="">
						<motion.p
							variants={variantsHeroChild}
							className="text-center text-lg font-semibold text-primary md:text-start lg:text-xl">
							Halo, Saya
						</motion.p>

						<motion.p
							variants={variantsHeroChild}
							className="mb-3 text-center text-4xl font-bold text-dark dark:text-white md:mb-0 md:text-start lg:text-5xl">
							Andhika Rahmatullah
						</motion.p>

						<motion.p
							variants={variantsHeroChild}
							className="text-center text-xl font-light text-dark dark:text-white md:text-start lg:text-2xl">
							<span className="block text-neutral-500 md:inline-block">Mahasiswa &</span> Frontend Web Developer
						</motion.p>
					</motion.div>

					{/* media sosial */}
					<div className="">
						<motion.div
							variants={variantsHero2}
							initial="hidden"
							animate="show"
							className="flex flex-row justify-start gap-3 font-light tracking-wide text-neutral-100">
							{/* instagram */}
							<motion.div
								variants={variantsHeroChild2}
								className="sosmed-hero">
								<a
									href="https://www.instagram.com/andhikarhmt_/"
									target="_blank"
									className="">
									<img
										src={require("../assets/instagram.png")}
										alt="instagram"
										className="w-[20px] lg:w-[25px]"
									/>
								</a>
							</motion.div>

							{/* github */}
							<motion.a
								variants={variantsHeroChild2}
								href="https://github.com/AndhikaRahmatullah"
								target="_blank"
								className="sosmed-hero">
								<img
									src={require("../assets/github.png")}
									alt="github"
									className="w-[20px] lg:w-[25px]"
								/>
							</motion.a>

							{/* linkedin */}
							<motion.a
								variants={variantsHeroChild2}
								href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/"
								target="_blank"
								className="sosmed-hero">
								<img
									src={require("../assets/linkedin.png")}
									alt="linkedin"
									className="w-[20px] lg:w-[25px]"
								/>
							</motion.a>
						</motion.div>
					</div>
				</div>

				{/* foto */}
				<motion.div
					variants={variantsHero3}
					initial="hidden"
					animate="show"
					className="relative flex items-center justify-center">
					<motion.span
						variants={variantsHeroChild3}
						className="absolute bottom-6 md:bottom-0">
						<svg
							className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] "
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#0ea5e9"
								d="M45.6,-79C59.6,-71,71.7,-59.7,79.4,-46C87.1,-32.3,90.4,-16.1,89.8,-0.3C89.3,15.5,84.8,30.9,77.5,45.3C70.2,59.7,60,73,46.6,80.1C33.2,87.2,16.6,88.1,1,86.4C-14.7,84.7,-29.4,80.5,-43.5,73.8C-57.6,67.2,-71,58,-78.3,45.3C-85.6,32.5,-86.7,16.3,-85.4,0.7C-84.2,-14.8,-80.6,-29.6,-73.7,-43.1C-66.9,-56.6,-56.8,-68.8,-44,-77.5C-31.2,-86.3,-15.6,-91.6,0.1,-91.8C15.8,-92,31.6,-87.1,45.6,-79Z"
								transform="translate(100 100)"
							/>
						</svg>
					</motion.span>
					<motion.img
						variants={variantsHeroChild3}
						src={require("../assets/foto.png")}
						alt="2"
						className="relative z-10 h-[305px] w-[295px] md:h-[400px] md:w-[390px] lg:h-[446px] lg:w-[430px]"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
