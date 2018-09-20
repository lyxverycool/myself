import * as constants from '../constants/actionsTypes';
import { FetchHttp } from '../fetch/http';

//查询诗文列表
export const queryPoetyAction = (params: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.GET_DATA_LOADING,
            data: null
        })
        await FetchHttp.post('/poety/queryPoety', params).then((res) => {
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

//查询诗文详情
export const poetyDetailAction = (params: any) => {
    return async (dispatch: any) => {
        await FetchHttp.post('/poety/poetyDetail', params).then((res) => {
            dispatch({
                type: constants.POET_DETAIL_DATA,
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

//初始化 poetyReducer
export const resetPoetyAction = () => {
    return (dispatch: any) => {
        dispatch({
            type: constants.POET_RESET_DATA,
            data: null
        })
    }
}