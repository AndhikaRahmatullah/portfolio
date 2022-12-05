import { motion } from "framer-motion";

const Contact = ({ contactItem }) => {
	return (
		<div
			id="contact"
			className="py-20 lg:py-32">
			<div className="container">
				{contactItem && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="mb-3 text-center text-lg font-semibold text-primary lg:text-xl">
						Kontak
					</motion.p>
				)}

				{contactItem && (
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 20, damping: 5 }}
						className="mb-16 flex flex-col items-center justify-center gap-5 lg:mx-72">
						<p className="text-center text-4xl font-bold tracking-wide text-dark lg:text-5xl">Hubungi Saya</p>
						<p className="text-center text-base leading-snug text-neutral-500 lg:text-lg">Untuk pertanyaan lebih lanjut, silahkan hubungi Saya.</p>
					</motion.div>
				)}

				<div className="flex flex-col items-center justify-evenly gap-10 lg:flex-row lg:items-start xl:mx-[70px]">
					{contactItem && (
						<>
							{/* address */}
							<div className="flex flex-col items-center justify-center gap-4 md:w-[250px] lg:w-[200px] xl:w-[260px]">
								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 20, damping: 5 }}
									className="flex items-center gap-2">
									<img
										src={require("../assets/address.png")}
										alt="address"
										className="w-[40px]"
									/>
									<p className="text-xl font-semibold tracking-wide text-primary">Alamat</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 2, type: "spring", stiffness: 20, damping: 5 }}
									className="text-base tracking-wide text-neutral-500">
									<p className="text-center">
										Jl. Tentara Pelajar Cimanggu Gg Pasama RT.01 RW.01 No.82<span className="block">Kota Bogor</span>
									</p>
								</motion.div>
							</div>

							{/* email */}
							<div className="flex flex-col items-center justify-center gap-4 md:w-[250px] lg:w-[200px] xl:w-[260px]">
								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 2.5, type: "spring", stiffness: 20, damping: 5 }}
									className="flex items-center gap-2">
									<img
										src={require("../assets/email.png")}
										alt="email"
										className="w-[40px]"
									/>
									<p className="text-xl font-semibold tracking-wide text-primary">Email</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 3, type: "spring", stiffness: 20, damping: 5 }}
									className="text-center text-base tracking-wide text-neutral-500">
									<p className="">dikarahmatullah909@gmail.com</p>
									<p className="">cobaaja8589@gmail.com</p>
								</motion.div>
							</div>

							{/* telepon */}
							<div className="flex flex-col items-center justify-center gap-4 md:w-[250px] lg:w-[200px] xl:w-[260px]">
								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 3.5, type: "spring", stiffness: 20, damping: 5 }}
									className="flex items-center gap-2">
									<img
										src={require("../assets/phone.png")}
										alt="telephone"
										className="w-[40px]"
									/>
									<p className="text-xl font-semibold tracking-wide text-primary">Telepon</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 4, type: "spring", stiffness: 20, damping: 5 }}
									className="text-center text-base tracking-wide text-neutral-500">
									<p className="">+62 882-9033-8993</p>
									<p className="">+62 857-7516-7960</p>
								</motion.div>
							</div>

							{/* whatsapp */}
							<div className="flex flex-col items-center justify-center gap-4 md:w-[250px] lg:w-[200px] xl:w-[260px]">
								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 4.5, type: "spring", stiffness: 20, damping: 5 }}
									className="flex items-center gap-2">
									<img
										src={require("../assets/whatsapp.png")}
										alt="whatsapp"
										className="w-[40px]"
									/>
									<p className="text-xl font-semibold tracking-wide text-primary">WhatsApp</p>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 1, delay: 5, type: "spring", stiffness: 20, damping: 5 }}
									className="text-center text-base tracking-wide text-neutral-500">
									<p className="">+62 882-9033-8993</p>
								</motion.div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Contact;
