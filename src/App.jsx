import LanguageProvider from "./context/languages";
import MainDisplay from "./MainDisplay";

const App = () => {
	return (
		<div className="">
			<LanguageProvider>
				<MainDisplay />
			</LanguageProvider>
		</div>
	);
};

export default App;
