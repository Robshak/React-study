import styles from "./JournalForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useEffect, useReducer, useRef } from "react";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";

function JournalForm({onSubmit, deleteItem, data}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, values, isFormReadyToSubmit} = formState;
	const titleRef = useRef();
	const postRef = useRef();

	const focusError = (isValid) => {
		switch(true){
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		if(data){
			dispatchForm({type: "CHANGE_VALUE", payload: {...data}});
		}
		else{
			dispatchForm({type: "CLEAR"});
		}
	}, [data]);

	useEffect(() => {
		let timerId;
		if(!isValid.title || !isValid.post){
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({type: "RESET_VALIDITY"});
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit){
			values.date = new Date().getTime();
			onSubmit(values);
			dispatchForm({type: "CLEAR"});
		}
	}, [isFormReadyToSubmit, values, onSubmit]);

	const changeValues = (e) => {
		dispatchForm({type: "CHANGE_VALUE", payload: {[e.target.name]: e.target.value}});
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({type: "SUBMIT"});
	};

	return (
		<form action="" className={styles["journal-form"]} onSubmit={addJournalItem}>
			<div className={styles["title-block"]}>
				<Input onChange={changeValues} ref={titleRef} type="text" name="title" placeholder="Untitled"
					value={values.title ? values.title : ""}
					isValid={isValid.title} appearence={"title"}/>
				<button className={styles["del-button"]} onClick={() => deleteItem(data)}>
					<img className={styles["del-img"]} src="/delete.svg" alt="" />
				</button>
			</div>
			<div className={styles["string-block"]}>
				<img src="/date.svg" alt="" className={styles["string-block_img"]}/>
				<div className={styles["string-block_name"]}>Date</div>
				<div className={styles["date"]}>
					{new Intl.DateTimeFormat("ru-RU").format(new Date())}
				</div>
			</div>
			<hr className={styles["hr"]} />
			<div className={styles["tag-block"]}>
				<label htmlFor="tag" className={styles["string-block"]}>
					<img src="/folder.svg" alt="" className={styles["string-block_img"]}/>
					<div className={styles["string-block_name"]}>Tags</div>
				</label>
				<Input onChange={changeValues} type="text" name="tag" id="tag" placeholder="add tags"
					value={values.tag ? values.tag : ""} isValid={true}/>
			</div>
			<hr className={styles["hr"]} />
			<textarea onChange={changeValues} ref={postRef} name="post" id=""
				value={values.post ? values.post : ""}
				className={cn(styles["input"], styles["textarea"], {
					[styles["invalid-post"]]: !isValid.post
				})}></textarea>
			<Button text={"Save"}></Button>
		</form>
	);
}

export default JournalForm;
