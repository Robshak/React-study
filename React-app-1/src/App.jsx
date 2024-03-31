import "./App.css";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import Body from "./layouts/Body/Body";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { SortContextProvider } from "./context/sortContext";
import SelectSort from "./components/SelectUser/SelectSort";
import { useState } from "react";

function App() {
	const [items, setItems] = useLocalStorage("data");
	const [bodyState, setBodyState] = useState(0);

	const addItem = item => {
		setItems([...items, {
			...item,
			id: (items.length == 0 ? 1 : Math.max(...items.map(i => i.id)) + 1)
		}]);
	};

	const changeItem = item => {
		setItems(items.map(i => {
			if(i.id == item.id){
				i = item;
			}
			return i;
		}));
	};

	const deleteItem = item => {
		if(item){
			setItems(items.filter(i => {
				return i.id !== item.id;
			}));
		}
	};

	return (
		<SortContextProvider>
			<div className="app">
				<LeftPanel>
					<Header></Header>
					<div className="journal-button-block">
						<JournalAddButton setBodyState={setBodyState}></JournalAddButton>
						<SelectSort></SelectSort>
					</div>
					<JournalList items={items} setBodyState={setBodyState}></JournalList>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={bodyState ? changeItem : addItem}
						deleteItem={deleteItem} setBodyState={setBodyState}
						data={items.find(i => i.id == bodyState)}></JournalForm>
				</Body>
			</div>
		</SortContextProvider>
	);
}

export default App;
