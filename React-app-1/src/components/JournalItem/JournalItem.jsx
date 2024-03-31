import "./JournalItem.css";

function JournalItem({ data }) {
	const formateDate = new Intl.DateTimeFormat("ru-RU").format(new Date(Number(data.date)));

	return (
		<>
			<div className="journal-item__header">{data.title}</div>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formateDate}</div>
				<div className="journal-item__text">{data.post}</div>
			</h2>
		</>
	);
}

export default JournalItem;
