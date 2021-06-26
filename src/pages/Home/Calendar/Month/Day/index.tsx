import React from "react";
import classNames from "classnames";
import styles from "./Day.module.scss";

export interface DayProps {
	date: Date;
	isCurrentMonth: boolean;
}
export const Day = (props: DayProps) => (
	<div className={styles.container}>
		<div
			className={classNames(
				styles.content,
				{ "text-primary": props.isCurrentMonth },
				{ "text-muted": !props.isCurrentMonth },
				"p-3"
			)}
		>
			{props.date.getDate()}
		</div>
	</div>
);

export default Day;