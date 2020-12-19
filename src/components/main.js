import React from 'react'
import { Switch, Route } from 'react-router-dom';
import aboutus from './aboutus';
import indonesia from './indonesia';
import international from './international';

const Main = () => (
    <Switch>
        <Route exact path="/" component={international} />
        <Route path="/international" component={international} />
        <Route path="/indonesia" component={indonesia} />
        <Route path="/aboutus" component={aboutus} />
    </Switch>
)

export default Main;
export { default as Cards } from './Cards/Cards';
export { default as Chart } from './Chart/Chart';
export { default as CountryPicker } from './CountryPicker/CountryPicker';
