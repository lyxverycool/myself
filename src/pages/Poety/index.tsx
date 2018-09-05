import * as React from 'react';
import AddPoety from './addPoety';
import PoetyList from './poetyList';
import PoetyDetail from './poetyDetail';
import { Switch, Route } from 'react-router-dom';
import '../../assets/less/common.less';

const Poety = () => (
  <Switch>
    <Route exact={true} path='/poety' component={PoetyList} />
    <Route path='/poety/poetyList' component={PoetyList} />
    <Route path='/poety/addPoety' component={AddPoety} />
    <Route path='/poety/poetyDetail/:poetyId' component={PoetyDetail} />
  </Switch>
)

export default Poety;




