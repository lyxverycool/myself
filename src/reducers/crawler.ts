
import * as Constants from '../constants/actionsTypes';

const CrawlerState = {
    bokeyuanData: [],
    loading: true,
}

// 初始化
const crawlerReducer = (state = CrawlerState, action: any) => {
    switch (action.type) {
        case Constants.GET_BOKEYUAN_DATA:
            return Object.assign({}, state, { loading: false, bokeyuanData: action.data })
        case Constants.GET_DATA_ERROR:
            return CrawlerState;
        default:
            return CrawlerState;
    }
}

export { crawlerReducer };