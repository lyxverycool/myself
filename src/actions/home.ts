import * as constants from '../constants/actionsTypes';
import { FetchApi } from '../util/api';
import { FetchHttp } from '../fetch/http';


// reducer同步数据到view
export const asyncAction = () => {
    return async (dispatch: any) => {
       await FetchHttp.get(FetchApi.easyApi, null).then((res) => {
            dispatch({
                type: constants.GET_EASY_DATA,
                data: res
            })
        }, (error) => {
            dispatch({
                type: constants.GET_EASY_DATA_ERROR,
                data: error
            })
        })
    }
}

//view异步获取数据，不经过reducer
export const asyncPromiseAction = () => {
    const asyncPromiseData = FetchHttp.get(FetchApi.easyApi, null);
    return {
        type: constants.GET_EASY_DATA,
        data: asyncPromiseData
    }
}
