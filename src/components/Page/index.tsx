import React from "react";
import Container from "react-bootstrap/Container";
import PageNav from "./PageNav";
import styles from "./Page.module.scss";

export interface PageProps {
	children?: React.ReactNode;
}
export const Page = (props: PageProps) => (
	<div className={styles.page}>
		<PageNav />
		<Container className="mb-4">
			{props.children}
		</Container>
	</div>
);

export default Page;