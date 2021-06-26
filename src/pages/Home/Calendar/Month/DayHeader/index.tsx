import React from "react";
import classNames from "classnames";
import styles from "./DayHeader.module.scss";
export interface DayHeaderProps {
	day: string;
}
export const DayHeader = (props: DayHeaderProps) => (
	<div className={classNames(styles.container, "p-3", "h5")}>{props.day}</div>
)

export default DayHeader;