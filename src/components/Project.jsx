import { motion } from "framer-motion";
import { useLanguage } from "../context/languages";

const Project = ({ projectItem, projectItem2 }) => {
	const { CurrentLanguage } = useLanguage();

	return (
		<div
			id="portfolio"
			className={projectItem ? "bg-neutral-200 py-20 transition-all duration-500 dark:bg-neutral-800 lg:py-32" : "bg-transparent py-20 transition-all duration-500 dark:bg-dark lg:py-32"}>
			{projectItem && (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
					className="mb-3 text-center text-lg font-semibold text-primary lg:text-xl">
					Portfolio
				</motion.p>
			)}
			{/* proyek terbaru */}
			<div className="container mb-20 lg:mb-28">
				{projectItem && (
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
						className="mb-8 flex flex-col items-center justify-center gap-5 lg:mx-72 lg:mb-16">
						<p className="text-center text-4xl font-bold tracking-wide text-dark dark:text-white lg:text-5xl">{CurrentLanguage === "Indonesia" ? "Proyek Terbaru" : "Recent Project"}</p>

						<p className="text-center text-base leading-snug text-neutral-500 lg:text-lg">{CurrentLanguage === "Indonesia" ? "Berikut beberapa Website yang telah saya kembangkan baik dalam bentuk Aplikasi Website maupun Website Statis." : "Here are some Websites that I have developed both in the form of Website Applications and Static Websites."}</p>
					</motion.div>
				)}

				{/* weather app */}
				<div className="mb-5 flex flex-col items-center justify-center gap-6 lg:flex-row">
					{projectItem && (
						<motion.img
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
							src={require("../assets/weather1.png")}
							alt=" weather app"
							className="h-[200px] w-[470px] rounded-lg shadow-md lg:h-[260px] lg:w-[490px]"
						/>
					)}

					{projectItem && (
						<motion.img
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
							src={require("../assets/weather2.png")}
							alt=" weather app 2"
							className="h-[200px] w-[470px] rounded-lg shadow-md lg:h-[260px] lg:w-[490px]"
						/>
					)}
				</div>

				{projectItem && (
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 2, type: "spring", stiffness: 20, damping: 5 }}
						className="flex flex-col items-center justify-center gap-2 lg:mx-[150px]">
						<p className="text-center text-xl font-semibold tracking-wide text-dark dark:text-white lg:text-2xl">Weather App</p>

						<p className="text-justify text-base text-neutral-500 lg:text-center">{CurrentLanguage === "Indonesia" ? "Sebuah Aplikasi Website untuk yang menyediakan kondisi cuaca terkini di berbagai Kota dan Daerah yang ada di Indonesia. Terdapat lebih dari 6000 lokasi yang dapat di perkirakan cuacanya. Sumber data yang kami gunakan dari Open Weather Map API." : "A website application for providing the latest weather conditions in various cities and regions in Indonesia. There are more than 6000 locations where the weather can be predicted. The data source we use is from the Open Weather Map API."}</p>

						<motion.a
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 3, type: "spring", stiffness: 20, damping: 5 }}
							href="https://movies-react-xi.vercel.app/"
							target="_blank"
							className="mt-5 w-fit rounded-lg bg-primary p-2 text-sm font-semibold tracking-wider text-white lg:text-base">
							{CurrentLanguage === "Indonesia" ? "Lihat Selengkapnnya" : "See More"}
						</motion.a>
					</motion.div>
				)}
			</div>

			{/* proyek lainnya */}
			<div className="container">
				{projectItem2 && (
					<motion.p
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, type: "spring", stiffness: 20, damping: 5 }}
						className="mb-7 text-start text-xl font-bold tracking-wide text-dark dark:text-white lg:text-2xl 2xl:mx-[150px]">
						{CurrentLanguage === "Indonesia" ? "Proyek Lainnya" : "Other Projects"}
					</motion.p>
				)}

				<div className="flex flex-wrap items-center justify-center gap-10 lg:items-start">
					{/* movie search */}
					<div className="flex flex-col gap-3 lg:w-[490px]">
						{/* gambar */}
						{projectItem2 && (
							<motion.img
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
								src={require("../assets/movsea1.png")}
								alt="movie search"
								className="h-[200px] w-full rounded-lg shadow-md md:h-[240px] md:w-[470px] lg:h-[260px] lg:w-[490px]"
							/>
						)}

						{/* deskripsi */}
						<div className="flex flex-col items-start justify-between gap-2">
							<div className="flex flex-col gap-2">
								{projectItem2 && (
									<>
										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
											className="text-lg font-semibold tracking-wide text-dark dark:text-white lg:text-xl">
											Movie Search
										</motion.p>

										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
											className="text-justify text-base leading-snug text-neutral-500">
											{CurrentLanguage === "Indonesia" ? "Sebuah Aplikasi Website untuk pecarian film yang sedang tayang, maupun sudah tayang diberbagai belahan Dunia. Tampilan yang sederhana namun elegan dengan balutan efek transisi pada tampilan awal disetiap halaman. Tidak lupa juga fitur 'Detail Film' pada setiap film yang berisi beberapa data tetang film tersebut." : "A website application for searching for films that are currently showing or have already been shown in various parts of the world. A simple but elegant display with a transition effect on the initial appearance of each page. Don't forget the 'Details Movie' feature for each film which contains some data about the film."}
										</motion.p>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 20, damping: 5 }}
											href="https://movies-react-xi.vercel.app/"
											target="_blank"
											className="w-fit text-sm font-semibold tracking-wide text-primary lg:text-base">
											{CurrentLanguage === "Indonesia" ? "Lihat Selengkapnya" : "See More"}
										</motion.a>
									</>
								)}
							</div>
						</div>
					</div>

					{/* share story */}
					<div className="flex flex-col gap-3 lg:w-[490px]">
						{/* gambar */}
						{projectItem2 && (
							<motion.img
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 3.5, type: "spring", stiffness: 20, damping: 5 }}
								src={require("../assets/sherstor1.png")}
								alt="share story"
								className="h-[200px] w-full rounded-lg shadow-md md:h-[240px] md:w-[470px] lg:h-[260px] lg:w-[490px]"
							/>
						)}

						{/* deskripsi */}
						<div className="flex flex-col items-start justify-between gap-2">
							<div className="flex flex-col gap-2">
								{projectItem2 && (
									<>
										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 4, type: "spring", stiffness: 20, damping: 5 }}
											className="text-lg font-semibold tracking-wide text-dark dark:text-white lg:text-xl">
											Share Story
										</motion.p>

										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 4.5, type: "spring", stiffness: 20, damping: 5 }}
											className="text-justify text-base leading-snug text-neutral-500">
											{CurrentLanguage === "Indonesia" ? "Sebuah Aplikasi Website berbentuk forum untuk berbagi cerita antar User yang menggunakan Aplikasi tersebut. Dengan fitur realtime data, status atau pesan akan otomatis terupdate tanpa direfresh, walaupun sedang digunakan oleh beberapa akun berbeda." : "A website application is in the form of a forum to share stories between users who use the application. With the realtime data feature, status or messages will be updated automatically without being refreshed, even though they are being used by several different accounts."}
										</motion.p>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 5.5, type: "spring", stiffness: 20, damping: 5 }}
											href="https://belalang-biru-reborn-master.vercel.app/"
											target="_blank"
											className="w-fit text-sm font-semibold tracking-wide text-primary lg:text-base">
											{CurrentLanguage === "Indonesia" ? "Lihat Selengkapnya" : "See More"}
										</motion.a>
									</>
								)}
							</div>
						</div>
					</div>

					{/* ecommerce */}
					<div className="flex flex-col justify-center gap-3 lg:w-[490px]">
						{/* gambar */}
						{projectItem2 && (
							<motion.img
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 6.5, type: "spring", stiffness: 20, damping: 5 }}
								src={require("../assets/ecom1.png")}
								alt="ecommerce"
								className="h-[200px] w-full rounded-lg shadow-md md:h-[240px] md:w-[470px] lg:h-[260px] lg:w-[490px]"
							/>
						)}

						<div className="flex flex-col items-start justify-between gap-2">
							<div className="flex flex-col gap-2">
								{/* deskripsi */}
								{projectItem2 && (
									<>
										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 7, type: "spring", stiffness: 20, damping: 5 }}
											className="text-lg font-semibold tracking-wide text-dark dark:text-white lg:text-xl">
											E-Commerce
										</motion.p>

										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 7.5, type: "spring", stiffness: 20, damping: 5 }}
											className="text-justify text-base leading-snug text-neutral-500">
											{CurrentLanguage === "Indonesia" ? "Sebuah Aplikasi Website dengan tema Toko Online. Seperti Toko Online pada umumnya, didalamnya terdapat fitur seperti Detail Produk, Keranjang, Kategori serta Halaman Pembayaran." : "A Website Application with an Online Store theme. Like online stores in general, it includes features such as product details, baskets, categories and payment pages."}
										</motion.p>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 8.5, type: "spring", stiffness: 20, damping: 5 }}
											href="http://www.shepiedika.byethost7.com/?i=1"
											target="_blank"
											className="w-fit text-sm font-semibold tracking-wide text-primary lg:text-base">
											{CurrentLanguage === "Indonesia" ? "Lihat Selengkapnya" : "See More"}
										</motion.a>
									</>
								)}
							</div>
						</div>
					</div>

					{/* see github */}
					<div className="mt-10 flex w-full items-center justify-start lg:w-[490px] xl:h-[406px] xl:justify-center">
						<div className="flex flex-col items-start justify-center gap-5 lg:items-center">
							{projectItem2 && (
								<>
									<motion.p
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 1, delay: 9.5, type: "spring", stiffness: 20, damping: 5 }}
										className="text-left text-xl font-semibold tracking-wide text-dark dark:text-white lg:text-center lg:text-4xl">
										{CurrentLanguage === "Indonesia" ? "Untuk melihat lebih banyak, Silahkan kunjungi Github" : "To see more, please visit my Github page"}
									</motion.p>

									<div className="flex flex-row items-center">
										<motion.img
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 10, type: "spring", stiffness: 20, damping: 5 }}
											src="https://img.icons8.com/glyph-neue/512/github.png"
											alt="github"
											className="w-[45px] rounded-full opacity-80 lg:w-[50px]"
										/>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 10.5, type: "spring", stiffness: 20, damping: 5 }}
											href="https://github.com/AndhikaRahmatullah	"
											target="_blank"
											className="w-fit text-base font-semibold tracking-wider text-[#24292f] dark:text-white lg:text-lg">
											AndhikaRahmatullah
										</motion.a>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
