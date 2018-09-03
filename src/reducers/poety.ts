
import * as Constants from '../constants/actionsTypes';

const poetyState = {
    poetyList: [],
    poetyDetail: {},
    loading: true,
    addPoety: false
}

// 初始化
const poetyReducer = (state = poetyState, action: any) => {
    switch (action.type) {
        case Constants.GET_POETY_DATA:
            return Object.assign({}, state, { loading: false, poetyList: action.data })
        case Constants.ADD_POETY_DATA:
            return Object.assign({}, state, { loading: false, addPoety: action.data })
        case Constants.POET_DETAIL_DATA:
            return Object.assign({}, state, { loading: false, poetyDetail: action.data })
        case Constants.GET_DATA_ERROR:
            return action;
        default:
            return poetyState;
    }
}

export { poetyReducer };