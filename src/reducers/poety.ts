
import * as Constants from '../constants/actionsTypes';

const poetyState = {
    poetyData: {
        poetyList: [],
        total: 0
    },
    poetyDetail: {},
    loading: true,
    addPoety: false
}

// 初始化
const poetyReducer = (state = poetyState, action: any) => {
    switch (action.type) {
        case Constants.GET_POETY_DATA:
            return Object.assign({}, state, { loading: false, poetyData: action.data })
        case Constants.ADD_POETY_DATA:
            return Object.assign({}, state, { loading: false, addPoety: action.data })
        case Constants.POET_DETAIL_DATA:
            return Object.assign({}, state, { loading: false, poetyDetail: action.data })
        case Constants.POET_RESET_DATA:
            return Object.assign({}, state, { loading: true, poetyDetail: {} })
        case Constants.GET_DATA_ERROR:
            return poetyState;
        default:
            return poetyState;
    }
}

export { poetyReducer };