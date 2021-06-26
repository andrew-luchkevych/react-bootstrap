import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,

} from "react-router-dom";

import Page from "./components/Page";
import Home from "./pages/Home";

export class App extends React.PureComponent {
	public render() {
		return (
			<BrowserRouter>
				<Page>
					<Home />
				</Page>
			</BrowserRouter>
		)
	}
}
export default App;