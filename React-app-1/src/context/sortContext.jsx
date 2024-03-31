import { createContext } from "react";
import { useState } from "react";

export const SortContext = createContext({
	sortId: 1
});

export const SortContextProvider = ({children})=>{
	const [sortId, setSortId] = useState(1);

	return <SortContext.Provider value={{sortId, setSortId}}>
		{children}
	</SortContext.Provider>;
};