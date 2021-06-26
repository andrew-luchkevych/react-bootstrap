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
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</Page>
			</BrowserRouter>
		)
	}
}
export default App;