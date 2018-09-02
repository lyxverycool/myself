import * as constants from '../constants/actionsTypes';
import { FetchHttp } from '../fetch/http';


// reducer同步数据到view
export const asyncAction = () => {
    return async (dispatch: any) => {
        await FetchHttp.get('/list/queryListAll', null).then((res) => {
            dispatch({
                type: constants.GET_HOME_DATA,
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


//view异步获取数据，不经过reducer
export const asyncPromiseAction = () => {
    const asyncPromiseData = FetchHttp.get('/index/list', null);
    return {
        type: constants.GET_HOME_DATA,
        data: asyncPromiseData
    }
}
