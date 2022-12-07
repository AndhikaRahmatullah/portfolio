import { motion } from "framer-motion";
import { useLanguage } from "../context/languages";

const About = ({ aboutItem }) => {
	const { CurrentLanguage } = useLanguage();

	return (
		<div
			id="about"
			className={aboutItem ? "bg-neutral-200 transition-all duration-500 dark:bg-neutral-800" : "bg-transparent transition-all duration-500 dark:bg-dark"}>
			<div className="container py-20 lg:py-32">
				{aboutItem && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="mb-3 text-lg font-semibold text-primary lg:text-xl">
						{CurrentLanguage === "Indonesia" ? "Tentang Saya" : "About Me"}
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
							{CurrentLanguage === "Indonesia" ? (
								<p className="text-3xl font-semibold tracking-wide text-dark dark:text-white lg:text-4xl">
									Mahasiswa <span className="block">Teknik Informatika</span>
								</p>
							) : (
								<p className="text-3xl font-semibold tracking-wide text-dark dark:text-white lg:text-4xl">
									Informatics Engineering <span className="block">Student</span>
								</p>
							)}
							<p className="text-base leading-snug text-neutral-500 lg:text-lg">{CurrentLanguage === "Indonesia" ? "Saya adalah Mahasiswa aktif Strata Satu (S1) disalah satu Perguruan Tinggi di Kota Bogor, tepatnya di Universitas Ibn Khaldun Bogor. Dengan penjurusan Teknik Informatika yang saya tempuh, akan sangat membantu dalam perkembangan diri dibidang Teknologi itu sendiri." : "I'm an active Undergraduate Student at one of the tertiary Institutions in Bogor City, to be precise at Ibn Khaldun University, Bogor. With the Informatics Engineering major that I took, it would be very helpful in self-development in the field of technology itself."}</p>
						</motion.div>
					)}

					{/* programer */}
					{aboutItem && (
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
							className="flex flex-col justify-center gap-3 lg:w-[600px]">
							<p className="text-3xl font-semibold tracking-wide text-dark dark:text-white lg:text-4xl">
								Frontend <span className="block">Web Developer</span>
							</p>
							<p className="text-base leading-snug text-neutral-500 lg:text-lg">{CurrentLanguage === "Indonesia" ? "Memiliki kemampuan dalam Bahasa Pemrograman Javascript. Dengan library React atau Vue pada bagian Frontend yang saya gunakan untuk Website yang dikembangkan." : "Have ability in Javascript Programming Language. With the React or Vue library on the Frontend section that I use for the developed Website."}</p>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default About;
