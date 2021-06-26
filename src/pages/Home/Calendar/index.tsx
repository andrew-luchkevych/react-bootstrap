import React from "react";
import Row from "react-bootstrap/Row";
import Month from "./Month";

export const Calendar = () => {
	const [date, setDate] = React.useState<Date>(new Date());
	const setMonth = (dir: number) => setDate(new Date(date.getFullYear(), date.getMonth() + dir, 1));
	const goToPrev = () => setMonth(-1);
	const goToNext = () => setMonth(1);
	return (
		<Row>
			<Month
				year={date.getFullYear()}
				month={date.getMonth()}
				goToPrev={goToPrev}
				goToNext={goToNext}
			/>
		</Row>
	);
}

export default Calendar;