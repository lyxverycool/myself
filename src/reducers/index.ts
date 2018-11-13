/**
 * @component reducers
 * @description  RootReducer
 * @time 2018/1/9
 * @author ***
 */

import { combineReducers } from 'redux'; // 连接reducers
import { homeReducer } from './home';
import { poetyReducer } from './poety';
import { crawlerReducer } from './crawler';

const rootReducer = combineReducers({
    homeReducer,
    poetyReducer,
    crawlerReducer
})

export default rootReducer;


