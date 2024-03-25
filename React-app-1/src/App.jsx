import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";

function App() {
	const data = [
		{
			title: "Подготовка к обновлению курсов",
			date: new Date(),
			text: "Сегодня провёл весь день за..."
		},
		{
			title: "pofkvdpfkjgG",
			date: new Date(),
			text: "Сегодня провёл весь день за..."
		}
	];

	return (
		<>
			<div>Project</div>
			<Button></Button>
			<CardButton>Test button</CardButton>
			<CardButton>
				<JournalItem data={data[0]}></JournalItem>
			</CardButton>
			<CardButton>
				<JournalItem data={data[1]}></JournalItem>
			</CardButton>
		</>
	);
}

export default App;
