import {IThemeContext, LayoutProps} from '@/modules';
import {createContext, useState} from 'react';
const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = ({children}: LayoutProps) => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
export {ThemeContext, ThemeProvider};
