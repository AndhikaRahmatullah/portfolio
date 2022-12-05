import { useState } from "react";
import { motion } from "framer-motion";

const About = ({ aboutItem }) => {
	return (
		<div
			id="about"
			className={aboutItem ? "bg-neutral-100 transition-all duration-500" : "bg-transparent transition-all duration-500"}>
			<div className="container py-20 lg:py-32">
				{aboutItem && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="mb-3 text-lg font-semibold text-primary lg:text-xl">
						Tentang Saya
					</motion.p>
				)}
				<div className="flex flex-col items-start justify-between gap-10 text-justify lg:flex-row lg:gap-5 lg:text-start">
					{/* mahasiswa */}
					{aboutItem && (
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
							className="flex flex-col justify-center gap-3 lg:w-[600px]">
							<p className="text-3xl font-semibold tracking-wide text-dark lg:text-4xl">
								Mahasiswa <span className="block">Teknik Informatika</span>
							</p>
							<p className="text-base leading-snug text-neutral-500 lg:text-lg">Saya adalah Mahasiswa aktif Strata Satu (S1) disalah satu Perguruan Tinggi di Kota Bogor, tepatnya di Universitas Ibn Khaldun Bogor. Dengan penjurusan Teknik Informatika yang saya tempuh, akan sangat membantu dalam perkembangan diri dibidang Teknologi itu sendiri.</p>
						</motion.div>
					)}

					{/* programer */}
					{aboutItem && (
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
							className="flex flex-col justify-center gap-3 lg:w-[600px]">
							<p className="text-3xl font-semibold tracking-wide text-dark lg:text-4xl">
								Frontend <span className="block">Web Developer</span>
							</p>
							<p className="text-base leading-snug text-neutral-500 lg:text-lg">Memiliki kemampuan dalam Bahasa Pemrograman Javascript. Dengan library React atau Vue pada bagian Frontend yang saya gunakan untuk Website yang dikembangkan.</p>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default About;