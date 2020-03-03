import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import pages 
import Desfixforfix from 'src/pages/des(fixforfix)';
import Regex from 'src/pages/regex';

export default function Rotas() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact><Desfixforfix /> </Route>
				<Route path='/regex'><Regex /> </Route>
			</Switch>
		</Router>
	);
}
