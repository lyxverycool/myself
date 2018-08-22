/**
 * @component constants
 * @description Http 服务
 * @time 2018/05/09
 * @author Mike.Cai
 */
export class FetchHttp {

    static handlerErr(e: any, url: any): any {
        return Promise.reject("网络异常，请稍后重试！");
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
            const response = await fetch(url, data).catch(e => this.handlerErr(e, url));
            if (!response.ok) {
                console.log(333)
                if (response.status === 401) {
                    //登录信息过期
                    window.top.location.href = window.top.location.origin + "/web/index/view/login.jsp#login";
                } else if (response.status === 403) {
                    //无权限
                } else {
                    //4XX 5XX其它异常统一弹框提示处理
                }
            }
            return response;
        } catch (error) {
            //捕获handlerErr中的异常信息弹框提示处理
            console.log("catch error");
            console.log(error);
        }
    }

    static get(url: string, options: any) {
        const fetchUrl = this.serializeParme(url, options);
        return this.fetchData(fetchUrl, 'get', {}).then(d => d.json()).catch(e => console.log(e));
    }

    static post(url: string, options: any, otherOpts?: any) {
        return this.fetchData(url, 'post', options).then(d => d.json()).catch(e => console.log(e));
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
