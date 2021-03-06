import * as constants from '../constants/actionsTypes';
import { FetchHttp } from '../fetch/http';

//获取博客园列表
export const getBokeyuanAction = () => {
    return async (dispatch: any) => {
        await FetchHttp.get('/crawler/getCnblogs', null).then((res) => {
            dispatch({
                type: res.data ? constants.GET_BOKEYUAN_DATA : constants.GET_DATA_ERROR,
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
