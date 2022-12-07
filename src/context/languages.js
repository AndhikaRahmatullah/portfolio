import { createContext, useContext, useReducer } from "react";

const InitialLanguageState = {
	CurrentLanguage: "Indonesia",
};

const LanguageActions = {
	SET_LANGUAGE: "SET_LANGUAGE",
};

const LanguageReducer = (state, action) => {
	switch (action.type) {
		case LanguageActions.SET_LANGUAGE:
			return { ...state, CurrentLanguage: action.payload.CurrentLanguage };

		default:
			break;
	}
};

const LanguageContext = createContext();

export const useLanguage = () => {
	return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(LanguageReducer, InitialLanguageState);

	const LanguageChange = (CurrentLanguage) => {
		dispatch({ type: LanguageActions.SET_LANGUAGE, payload: { CurrentLanguage: CurrentLanguage } });
	};


	return <LanguageContext.Provider value={ { ...state, LanguageChange } }>{ children }</LanguageContext.Provider>;
};

export default LanguageProvider;
