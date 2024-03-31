import "./JournalList.css";
import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton";
import { useContext } from "react";
import { SortContext } from "../../context/sortContext";

const compare = (a, b) =>{
	return a > b;
};

function JournalList({items, setBodyState}) {
	const {sortId} = useContext(SortContext);

	if(items.length == 0){
		return(
			<p>{"you don't have entries for now"}</p>
		);
	}
	else{

		const sortItems = (a, b) => {
			let direction = 0;
			if(sortId == 1){
				direction = -1;
			}
			else{
				direction = 1;
			}
			if(compare(Number(a.date), Number(b.date))){
				return direction;
			}
			else if(a.date < b.date){
				return -direction;
			}
			return 0;
		};

		return (
			<div className="journal-list">{
				items.sort(sortItems).map(el => (
					<CardButton key={el.id} onClick={() => setBodyState(el.id)} className={"journal-item"}>
						<JournalItem data={el}></JournalItem>
					</CardButton>
				))
			}</div>
		);
	}
}

export default JournalList;
