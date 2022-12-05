import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
	const [title, setTitle] = useState(null);
	const [showIcon, setShowIcon] = useState(false);
	const [aboutItem, setAboutItem] = useState(false);
	const [skillsItem, setSkillsItem] = useState(false);
	const [projectItem, setProjectItem] = useState(false);
	const [projectItem2, setProjectItem2] = useState(false);
	const [contactItem, setContactItem] = useState(false);
	const [footerItem, setFooterItem] = useState(false);

	useEffect(() => {
		document.title = "Andhika Rahmatullah";
	}, []);

	window.onscroll = function () {
		const navigation = document.querySelector("#navigation"),
			about = document.querySelector("#about"),
			skills = document.querySelector("#skills"),
			portfolio = document.querySelector("#portfolio"),
			contact = document.querySelector("#contact"),
			footer = document.querySelector("#footer"),
			fixedNav = navigation.offsetTop,
			aboutTop = about.offsetTop - 10,
			skillsTop = skills.offsetTop - 10,
			portfolioTop = portfolio.offsetTop - 10,
			contactTop = contact.offsetTop - 10,
			footerTop = footer.offsetTop - 10;
		console.log("window.pageYOffset :", window.pageYOffset);

		if (window.pageYOffset > fixedNav) {
			navigation.classList.add("navbar-fixed");
			setShowIcon(true);
		} else {
			navigation.classList.remove("navbar-fixed");
			setShowIcon(false);
		}

		if (window.pageYOffset >= aboutTop - 200) {
			setAboutItem(true);
		}

		if (window.pageYOffset >= skillsTop - 200) {
			setSkillsItem(true);
		}

		if (window.pageYOffset >= portfolioTop - 200) {
			setProjectItem(true);
		}

		if (window.pageYOffset >= portfolioTop + 500) {
			setProjectItem2(true);
		}

		if (window.pageYOffset >= contactTop - 200) {
			setContactItem(true);
		}

		if (window.pageYOffset >= footerTop - 700) {
			setFooterItem(true);
		}

		if (window.pageYOffset < aboutTop) {
			setTitle(null);
		} else if (window.pageYOffset > aboutTop && window.pageYOffset < skillsTop) {
			setTitle("Tentang Saya");
		} else if (window.pageYOffset > skillsTop && window.pageYOffset < portfolioTop) {
			setTitle("Keterampilan");
		} else if (window.pageYOffset > portfolioTop && window.pageYOffset < contactTop) {
			setTitle("Portfolio");
		} else if (window.pageYOffset > contactTop && window.pageYOffset < footerTop) {
			setTitle("Kontak");
		}
	};

	return (
		<div className="">
			<Navigation title={title} />
			<Hero />
			<About aboutItem={aboutItem} />
			<Skills skillsItem={skillsItem} />
			<Project
				projectItem={projectItem}
				projectItem2={projectItem2}
			/>
			<Contact contactItem={contactItem} />
			<Footer
				footerItem={footerItem}
				contactItem={contactItem}
			/>
			<BackToTop showIcon={showIcon} />
		</div>
	);
};

export default App;
