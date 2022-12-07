import { useLanguage } from "../context/languages";

const Language = () => {
	const { CurrentLanguage, LanguageChange } = useLanguage();

	const changeLanguage = () => {
		if (CurrentLanguage === "Indonesia") {
			return LanguageChange("English");
		}
		LanguageChange("Indonesia");
	};

	return (
		<img
			src={CurrentLanguage === "Indonesia" ? "https://img.icons8.com/color/512/indonesia-circular.png" : "https://img.icons8.com/color/512/usa-circular.png"}
			alt={CurrentLanguage === "Indonesia" ? "Indonesia" : "English"}
			className="mx-5 w-[30px] cursor-pointer"
			onClick={changeLanguage}
		/>
	);
};

export default Language;
