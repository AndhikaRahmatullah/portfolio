import { motion } from "framer-motion";
import { useLanguage } from "../context/languages";

const Skills = ({ skillsItem }) => {
	const { CurrentLanguage } = useLanguage();

	return (
		<div className="transition-all duration-500 dark:bg-dark">
			<div
				id="skills"
				className="container py-20 lg:py-32">
				{skillsItem && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="mb-3 text-lg font-semibold text-primary lg:text-xl">
						{CurrentLanguage === "Indonesia" ? "Keterampilan" : "Skills"}
					</motion.p>
				)}
				<div className="flex flex-col items-start gap-2">
					{/* javascript */}
					<div className="flex w-full flex-row items-center justify-between gap-5">
						{skillsItem && (
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
								className="list-skills">
								Javascript <span className="list-skill-child">{CurrentLanguage === "Indonesia" ? "Keterampilan menggunakan Bahasa Pemrograman Javascript murni atau polos." : "Skills using pure or plain Javascript Programming Language."}</span>
							</motion.p>
						)}

						{skillsItem && (
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 3.5 }}
								src={require("../assets/checklist.png")}
								alt="done"
								className="w-[30px]"
							/>
						)}
					</div>

					{/* react */}
					<div className="flex w-full flex-row items-center justify-between gap-5">
						{skillsItem && (
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
								className="list-skills">
								React <span className="list-skill-child">{CurrentLanguage === "Indonesia" ? "Perpustakaan Javascript utama yang digunakan dalam beberapa Aplikasi Website yang dikembangkan." : "Main Javascript library used in some developed Website Applications."}</span>
							</motion.p>
						)}

						{skillsItem && (
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 4 }}
								src={require("../assets/checklist.png")}
								alt="done"
								className="w-[30px]"
							/>
						)}
					</div>

					{/* vue */}
					<div className="flex w-full flex-row items-center justify-between gap-5">
						{skillsItem && (
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
								className="list-skills">
								Vue <span className="list-skill-child">{CurrentLanguage === "Indonesia" ? "Kerangka Kerja Javascript yang digunakan dalam pengembangan Aplikasi Website sebagai opsi lain dari React." : "A Javascript Framework used in Website Application development as another option for React."}</span>
							</motion.p>
						)}

						{skillsItem && (
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 4.5 }}
								src={require("../assets/checklist.png")}
								alt="done"
								className="w-[30px]"
							/>
						)}
					</div>

					{/* tailwind */}
					<div className="flex w-full flex-row items-center justify-between gap-5">
						{skillsItem && (
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 2, type: "spring", stiffness: 20, damping: 5 }}
								className="list-skills">
								TailwindCSS <span className="list-skill-child">{CurrentLanguage === "Indonesia" ? "Kerangka Kerja CSS yang digunakan dalam pengembangan sebuah Website statis maupun dinamis." : "The CSS framework used in the development of a static or dynamic website."}</span>
							</motion.p>
						)}

						{skillsItem && (
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 5 }}
								src={require("../assets/checklist.png")}
								alt="done"
								className="w-[30px]"
							/>
						)}
					</div>

					{/* firebase */}
					<div className="flex w-full flex-row items-center justify-between gap-5">
						{skillsItem && (
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 20, damping: 5 }}
								className="list-skills">
								Firebase <span className="list-skill-child">{CurrentLanguage === "Indonesia" ? "Layanan Backend dari Google yang digunakan untuk pembuatan database, autentikasi dan sejenisnya." : "Backend service from Google which is used for database creation, authentication and the like."}</span>
							</motion.p>
						)}

						{skillsItem && (
							<motion.img
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 5.5 }}
								src={require("../assets/checklist.png")}
								alt="done"
								className="w-[30px]"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
