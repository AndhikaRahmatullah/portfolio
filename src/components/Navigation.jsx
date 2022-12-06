import DarkMode from "./DarkMode";

const Navigation = ({ title }) => {
	const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("nav-menu");

	const hamburgerActive = () => {
		navMenu.classList.toggle("hidden");
		hamburger.classList.toggle("hamburger-active");
	};

	window.addEventListener("click", function (e) {
		if (e.target != navMenu && e.target != hamburger) {
			hamburger.classList.remove("hamburger-active");
			navMenu.classList.add("hidden");
		}
	});

	return (
		<div
			id="navigation"
			className="absolute top-0 left-0 z-10 w-full py-5 pr-5 lg:px-5 lg:py-0">
			<div className="container relative flex flex-row items-center justify-between">
				{/* title */}
				<div className="">
					<a
						href="#"
						className="text-base font-bold tracking-wider text-primary lg:text-lg">
						Andhika Rahmatullah <span className="hidden text-base font-light lg:inline-block">{title}</span>
					</a>
				</div>

				{/* hamburger */}
				<div className="flex items-center">
					<button
						id="hamburger"
						onClick={hamburgerActive}
						className="absolute right-4 block lg:hidden">
						<span className="hamburger-line origin-top-left transition-all duration-500"></span>
						<span className="hamburger-line transition-all duration-500"></span>
						<span className="hamburger-line origin-bottom-left transition-all duration-500"></span>
					</button>

					{/* navMenu */}
					<nav
						id="nav-menu"
						className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg shadow-dark/50 dark:bg-dark dark:shadow-neutral-500/50 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:lg:bg-transparent">
						<ul className="flex flex-col gap-2 lg:flex-row">
							<li className="group">
								<a
									href="#home"
									className="mx-5 py-2 text-sm text-dark group-hover:text-primary dark:text-white lg:mx-3 lg:text-base">
									Beranda
								</a>
							</li>
							<li className="group">
								<a
									href="#about"
									className="mx-5 py-2 text-sm text-dark group-hover:text-primary dark:text-white lg:mx-3 lg:text-base">
									Tentang Saya
								</a>
							</li>
							<li className="group">
								<a
									href="#skills"
									className="mx-5 py-2 text-sm text-dark group-hover:text-primary dark:text-white lg:mx-3 lg:text-base">
									Keterampilan
								</a>
							</li>
							<li className="group">
								<a
									href="#portfolio"
									className="mx-5 py-2 text-sm text-dark group-hover:text-primary dark:text-white lg:mx-3 lg:text-base">
									Portfolio
								</a>
							</li>
							<li className="group">
								<a
									href="#contact"
									className="mx-5 py-2 text-base text-dark group-hover:text-primary dark:text-white lg:mx-3">
									Kontak
								</a>
							</li>
							<li className="group">
								<DarkMode />
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
