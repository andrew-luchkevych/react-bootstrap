import React from "react";
import { ChevronLeft, ChevronRight } from "iconic-react"
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import DayHeader from "./DayHeader";
import Day from "./Day";
import styles from "./Month.module.scss";

export interface MonthProps {
	year: number;
	month: number;
	goToPrev: () => void;
	goToNext: () => void;
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Month = (props: MonthProps) => {

	// Calculating days needs to be displayed before current month dates
	const month = new Date(props.year, props.month, 1);
	const monthFirstWeekDay = month.getDay();
	const prevDays = monthFirstWeekDay === 1
		? 0
		: monthFirstWeekDay === 0 ? 6 : monthFirstWeekDay - 1;

	// Getting current month days
	const currentMonthDays = new Date(props.year, props.month + 1, 0).getDate();

	// Calculating full rows days
	const fullRowsCount = Math.ceil((currentMonthDays + prevDays) / 7);
	const days = fullRowsCount * 7;

	// Creating that will consists all rows days
	const dates = Array.from(Array(days)).map((_, i) => {

		/**
		 * Creating dates to fit:
		 * - prev month to fill first row
		 * - current month
		 * - next month to fill last row
		*/
		const day = i - prevDays + 1;
		const date = new Date(props.year, props.month, day);
		return {
			date,
			isCurrentMonth: day > 0 && day <= currentMonthDays,
		};
	});
	return (
		<div className={styles.container}>
			<div className={classNames(styles.title, "mb-5")}>
				<Button variant="outline-primary" onClick={props.goToPrev}>
					<ChevronLeft size={48} />
				</Button>
				<div className="display-4">
					{month.toLocaleString("default", { month: "long" })}
				</div>
				<Button variant="outline-primary" onClick={props.goToNext}>
					<ChevronRight size={48} />
				</Button>
			</div>
			<div className={styles.headers}>
				{weekdays.map(wd => <DayHeader day={wd} key={wd} />)}
			</div>
			<div className={styles.dates}>
				{dates.map(d => <Day {...d} key={d.date.toLocaleDateString()} />)}
			</div>
		</div>
	);
};

export default Month;