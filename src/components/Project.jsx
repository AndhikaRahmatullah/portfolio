import { motion } from "framer-motion";

const Project = ({ projectItem, projectItem2 }) => {
	return (
		<div
			id="portfolio"
			className={projectItem ? "bg-neutral-100 py-20 transition-all duration-500 lg:py-32" : "bg-transparent py-20 transition-all duration-500 lg:py-32"}>
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
						<p className="text-center text-4xl font-bold tracking-wide text-dark lg:text-5xl">Proyek Terbaru</p>
						<p className="text-center text-base leading-snug text-neutral-500 lg:text-lg">Berikut beberapa Website yang telah saya kembangkan baik dalam bentuk Aplikasi Website maupun Website Statis.</p>
					</motion.div>
				)}

				<div className="mb-5 flex flex-col items-center justify-center gap-6 lg:flex-row">
					{projectItem && (
						<motion.img
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
							src={require("../assets/movsea1.png")}
							alt="movie search"
							className="h-[200px] w-[470px] rounded-lg shadow-md lg:h-[260px] lg:w-[490px]"
						/>
					)}

					{projectItem && (
						<motion.img
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
							src={require("../assets/movsea2.png")}
							alt="movie search 2"
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
						<p className="text-center text-xl font-semibold tracking-wide text-dark lg:text-2xl">Movie Search</p>
						<p className="text-justify text-base text-neutral-500 lg:text-center">Sebuah Aplikasi Website untuk pecarian film yang sedang tayang, maupun sudah tayang diberbagai belahan Dunia. Tampilan yang sederhana namun elegan dengan balutan efek transisi pada tampilan awal disetiap halaman. Tidak lupa juga fitur "Detail Film" pada setiap film yang berisi beberapa data tetang film tersebut.</p>

						<motion.a
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 3, type: "spring", stiffness: 20, damping: 5 }}
							href="https://movies-react-xi.vercel.app/"
							target="_blank"
							className="mt-5 w-fit rounded-lg bg-primary p-2 text-sm font-semibold tracking-wider text-white lg:text-base">
							Lihat Selengkapnnya
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
						className="mb-7 text-start text-xl font-bold tracking-wide text-dark lg:text-2xl 2xl:mx-[150px]">
						Proyek Lainnya
					</motion.p>
				)}

				<div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start">
					{/* share story */}
					<div className="flex flex-col gap-3 lg:w-[490px]">
						{/* gambar */}
						{projectItem2 && (
							<motion.img
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
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
											transition={{ duration: 1, delay: 1, type: "spring", stiffness: 20, damping: 5 }}
											className="text-lg font-semibold tracking-wide text-dark lg:text-xl">
											Share Story
										</motion.p>

										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
											className="text-justify text-base leading-snug text-neutral-500">
											Sebuah Aplikasi Website berbentuk forum untuk berbagi cerita antar User yang menggunakan Aplikasi tersebut. Dengan fitur realtime data, status atau pesan akan otomatis terupdate tanpa direfresh, walaupun sedang digunakan oleh beberapa akun berbeda.
										</motion.p>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 20, damping: 5 }}
											href="https://belalang-biru-reborn-master.vercel.app/"
											target="_blank"
											className="w-fit text-sm font-semibold tracking-wide text-primary lg:text-base">
											Lihat Selengkapnya
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
								transition={{ duration: 1, delay: 3.5, type: "spring", stiffness: 20, damping: 5 }}
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
											transition={{ duration: 1, delay: 4, type: "spring", stiffness: 20, damping: 5 }}
											className="text-lg font-semibold tracking-wide text-dark lg:text-xl">
											E-Commerce
										</motion.p>

										<motion.p
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 1, delay: 4.5, type: "spring", stiffness: 20, damping: 5 }}
											className="text-justify text-base leading-snug text-neutral-500">
											Sebuah Aplikasi Website dengan tema Toko Online. Seperti Toko Online pada umumnya, didalamnya terdapat fitur seperti Detail Produk, Keranjang, Kategori serta Halaman Pembayaran.
										</motion.p>

										<motion.a
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1, delay: 5.5, type: "spring", stiffness: 20, damping: 5 }}
											href="http://www.shepiedika.byethost7.com/?i=1"
											target="_blank"
											className="w-fit text-sm font-semibold tracking-wide text-primary lg:text-base">
											Lihat Selengkapnya
										</motion.a>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
