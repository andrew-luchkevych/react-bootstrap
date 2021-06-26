import React from "react";

import Page from "./components/Page";
import Home from "./pages/Home";

export class App extends React.PureComponent {
	public render() {
		return (
			<Page>
				<Home />
			</Page>
		)
	}
}
export default App;