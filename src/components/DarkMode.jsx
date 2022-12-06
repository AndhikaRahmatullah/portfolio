import { useState, useEffect } from "react";
import "../darkMode.css";

const DarkMode = () => {
	const html = document.querySelector("html");

	const handleChange = (e) => {
		if (e.target.checked) {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	};

	return (
		<div
			className=""
			id="head">
			<div className="absolute right-[10px] top-[20px]">
				<label className="switch">
					<input
						type="checkbox"
						id="checkboxRef"
						onChange={handleChange}
					/>
					<span className="slider round"></span>
				</label>
			</div>
		</div>
	);
};

export default DarkMode;
