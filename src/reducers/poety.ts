
import * as Constants from '../constants/actionsTypes';

const poetyState = {
    poetyList: [],
    addPoety: false
}

// 初始化
const poetyReducer = (state = poetyState, action: any) => {
    switch (action.type) {
        case Constants.GET_POETY_DATA:
            return Object.assign({}, state, { poetyList: action.data })
        case Constants.ADD_POETY_DATA:
            return Object.assign({}, state, { addPoety: action.data })
        case Constants.GET_DATA_ERROR:
            return action;
        default:
            return poetyState;
    }
}

export { poetyReducer };