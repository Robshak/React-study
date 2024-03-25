import "./JournalItem.css";

function JournalItem({data}) {
	const formateDate = new Intl.DateTimeFormat("ru-RU").format(data.date);

	return (
		<>
			<h2 className="journal-itme__header">{data.title}</h2>
			<h2 className="journal-itme__body">
				<div className="journal-item__date">{formateDate}</div>
				<div className="journal-item__text">{data.text}</div>
			</h2>
		</>
	);
}

export default JournalItem;
