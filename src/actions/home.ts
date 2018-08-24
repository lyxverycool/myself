import * as constants from '../constants/actionsTypes';
import { FetchHttp } from '../fetch/http';


// reducer同步数据到view
export const asyncAction = () => {
    return async (dispatch: any) => {
        await FetchHttp.get('/index/list', null).then((res) => {
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


export const addPoetyAction = (params: any) => {
    return async (dispatch: any) => {
        await FetchHttp.post('/poety/addPoety', params).then((res) => {
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
    const asyncPromiseData = FetchHttp.get('/index/list', null);
    return {
        type: constants.GET_EASY_DATA,
        data: asyncPromiseData
    }
}
