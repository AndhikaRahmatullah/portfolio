import { useLanguage } from "../context/languages";

const Footer = ({ footerItem, contactItem }) => {
	const { CurrentLanguage } = useLanguage();

	return (
		<div
			className={footerItem && contactItem ? "bg-dark pt-10 pb-2 transition-all duration-500 dark:bg-neutral-800 lg:pt-20" : "bg-transparent pt-10 pb-2 transition-all duration-500 dark:bg-dark lg:pt-20"}
			id="footer">
			<div className="container mb-5 flex flex-col items-center justify-between gap-10 md:mb-10 lg:mb-20 lg:flex-row ">
				{/* name */}
				<div className="flex basis-1/4 items-center gap-6 lg:w-[300px]">
					<p className="text-center text-2xl font-bold tracking-wider text-white md:text-3xl">Andhika Rahmatullah</p>
				</div>

				<div className="flex basis-3/4 flex-col items-center justify-around gap-10 lg:flex-row lg:items-start">
					{/* tautan */}
					<div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
						<p className="text-lg font-bold tracking-wider text-white md:text-xl">{CurrentLanguage === "Indonesia" ? "Tautan" : "Sections"}</p>
						<div className="flex flex-col items-center justify-start gap-2 text-base font-light tracking-wide text-neutral-100 lg:items-start lg:gap-3">
							<a
								href="#home"
								className="transition-all duration-300 hover:text-primary">
								{CurrentLanguage === "Indonesia" ? "Beranda" : "Home"}
							</a>
							<a
								href="#about"
								className="transition-all duration-300 hover:text-primary">
								{CurrentLanguage === "Indonesia" ? "Tentang Saya" : "About Me"}
							</a>
							<a
								href="#portfolio"
								className="transition-all duration-300 hover:text-primary">
								Portfolio
							</a>
							<a
								href="#contact"
								className="transition-all duration-300 hover:text-primary">
								{CurrentLanguage === "Indonesia" ? "Kontak" : "Contact"}
							</a>
						</div>
					</div>

					{/* proyek */}
					<div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
						<p className="text-lg font-bold tracking-wider text-white md:text-xl">{CurrentLanguage === "Indonesia" ? "Proyek" : "Projects"}</p>
						<div className="flex flex-col items-center justify-start gap-2 font-light tracking-wide text-neutral-100 lg:items-start lg:gap-3">
							<a
								href="https://movies-react-xi.vercel.app/"
								target="_blank"
								className="transition-all duration-300 hover:text-primary">
								Movie Search
							</a>
							<a
								href="http://www.shepiedika.byethost7.com/?i=1"
								target="_blank"
								className="transition-all duration-300 hover:text-primary">
								E-Commerce
							</a>
							<a
								href="https://belalang-biru-reborn-master.vercel.app/"
								target="_blank"
								className="transition-all duration-300 hover:text-primary">
								Share Story
							</a>
						</div>
					</div>

					{/* media sosial */}
					<div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
						<p className="text-xl font-bold tracking-wider text-white">Media Sosial</p>
						<div className="flex flex-row items-center justify-start gap-3 font-light tracking-wide text-neutral-100 lg:items-start">
							<a
								href="https://www.instagram.com/andhikarhmt_/"
								target="_blank"
								className="sosmed-footer">
								<img
									src={require("../assets/instagram.png")}
									alt="instagram"
									className="w-[20px] lg:w-[25px]"
								/>
							</a>
							<a
								href="https://github.com/AndhikaRahmatullah"
								target="_blank"
								className="sosmed-footer">
								<img
									src={require("../assets/github.png")}
									alt="github"
									className="w-[20px] lg:w-[25px]"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/andhika-rahmatullah-2039b0157/"
								target="_blank"
								className="sosmed-footer">
								<img
									src={require("../assets/linkedin.png")}
									alt="linkedin"
									className="w-[20px] lg:w-[25px]"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* end */}
			<div className="border-t-2 p-2">
				<p className="container text-center text-xs font-light tracking-wide text-white md:text-sm">Copyright &copy; 2022 Andhika Rahmatullah - All Right Reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
