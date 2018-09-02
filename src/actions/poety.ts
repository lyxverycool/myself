import * as constants from '../constants/actionsTypes';
import { FetchHttp } from '../fetch/http';

//添加诗文
export const addPoetyAction = (params: any) => {
    return async (dispatch: any) => {
        await FetchHttp.post('/poety/addPoety', params).then((res) => {
            dispatch({
                type: constants.ADD_POETY_DATA,
                data: res.data
            })
        }, (error) => {
            dispatch({
                type: constants.GET_DATA_ERROR,
                data: error
            })
        })
    }
}

//查询诗文列表
export const queryPoetyAction = (params: any) => {
    return async (dispatch: any) => {
        await FetchHttp.get('/poety/queryPoety', null).then((res) => {
            dispatch({
                type: constants.GET_POETY_DATA,
                data: res.data
            })
        }, (error) => {
            dispatch({
                type: constants.GET_DATA_ERROR,
                data: error
            })
        })
    }
}

