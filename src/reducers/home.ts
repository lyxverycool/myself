import * as Constants from '../constants/actionsTypes';


// 初始化
const homeReducer = (state = [], action: any) => {
    switch (action.type) {
        case Constants.GET_HOME_DATA:
            return action.data;
        case Constants.GET_DATA_ERROR:
            return action;
        default:
            return state;
    }
}

export { homeReducer };