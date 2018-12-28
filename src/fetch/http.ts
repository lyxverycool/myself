/**
 * @component constants
 * @description Http 服务
 * @time 2018/05/09
 * @author cool.li
 */
import { message } from "antd";

export class FetchHttp {

    static handlerErr(url: any): any {
        message.error("网络异常，请稍后重试！");
    }

    static async fetchData(url: string, reqtype: string, options: any) {
        // document.cookie ='SESSION=8d26f795-c573-4928-9c08-48a0dd2ab6a9;';
        const data = {
            method: reqtype,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json;charset=UTF-8",
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: (reqtype === "post" ? JSON.stringify(options) : null as any)
        }

        try {
            const response = await fetch(url, data);
            if (!response.ok) {
                if (response.status === 401) {
                    //登录信息过期
                    message.error("登录过期，请重新登录")
                } else if (response.status === 403) {
                    //无权限
                    message.error("403")
                } else {
                    this.handlerErr(url)
                    //4XX 5XX其它异常统一弹框提示处理
                }
                return response
            } else {
                return response.json();
            }
        } catch (error) {
            //捕获handlerErr中的异常信息弹框提示处理
            console.log("catch error");
        }
    }

    static get(url: string, options: any) {
        const fetchUrl = this.serializeParme(url, options);
        return this.fetchData(fetchUrl, 'get', {}).then(d => d).catch(e => e);
    }

    static post(url: string, options: any, otherOpts?: any) {
        return this.fetchData(url, 'post', options).then(d => d).catch(e => e);
    }

    static serializeParme(url: string, options: any) {
        let urlPath: string = url;
        if (options) {
            const paramsArray: any = [];
            //拼接参数  
            Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]))
            if (url.search(/\?/) === -1) {
                urlPath += '?' + paramsArray.join('&')
            } else {
                urlPath += '&' + paramsArray.join('&')
            }
        }
        return urlPath;
    }
}
