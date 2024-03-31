import styles from "./SelectSort.module.css";
import { useContext, useState } from "react";
import { SortContext } from "../../context/sortContext";
import cn from "classnames";
import CardButton from "../CardButton/CardButton";

function SelectSort() {
	const {sortId, setSortId} = useContext(SortContext);
	const [selectBlockState, setSelectBlockState] = useState(false);

	const states = ["New", "Old"];

	const changeUser = (e) => {
		setSortId(Number(e.target.value));
		setSelectBlockState((val) => !val);
	};

	const onClick = ()=>{
		setSelectBlockState((val) => !val);
	};

	return (
		<div className={cn(styles["select-wrapper"])}>
			<CardButton onClick={onClick} className={cn(styles["select-button"])}>{states[sortId - 1]}</CardButton>
			<div className={cn(styles["select-block"], {
				[styles["show-block"]]: !selectBlockState
			})}>
				<button onClick={changeUser} value={1} className={cn(styles["slsect-item"])}>{states[0]}</button>
				<button onClick={changeUser} value={2} className={cn(styles["slsect-item"])}>{states[1]}</button>
			</div>
		</div>
	);
}

export default SelectSort;
