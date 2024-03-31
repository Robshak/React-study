import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton({setBodyState}) {

	return (
		<CardButton onClick={() => setBodyState(0)}>
			<div className="journal-add-button">
				<img src="/add.png" alt="" className="journal-add-button__img"/>
				<div className="journal-add-button__text">New entry</div>
			</div>
		</CardButton>
	);
}

export default JournalAddButton;
