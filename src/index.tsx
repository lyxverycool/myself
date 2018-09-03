/**
 * @author coo.li
 * @time 2018/05/05.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ConfigureStore from './store/configureStore';
import AppRoute from './router/index';
import Index from './pages/Home/index';
import Poety from './pages/Poety/index';
import { LocaleProvider } from 'antd';

/*引入国际化组件*/
import { IntlProvider } from 'react-intl';

/*引入locale配置文件*/
import zhCN from 'antd/lib/locale-provider/zh_CN';
//import enCN from 'antd/lib/locale-provider/en_US';
import 'moment/locale/zh-cn';

/*引入国际化业务名配置*/
import zh_CN from './locale/zh_CN';
// import en_US from './locale/en_US';

/*antd组件库样式*/

import registerServiceWorker from './registerServiceWorker';
const store = ConfigureStore();

//监听state变化
store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    (
        <IntlProvider locale={'en'} messages={zh_CN}>
            <Provider store={store}>
                <HashRouter>
                    <LocaleProvider locale={zhCN}>
                        <AppRoute>
                            <Switch>
                                <Route exact={true} path="/" component={Index} />
                                <Route path="/poety" component={Poety} />
                                <Redirect to="/" />
                            </Switch>
                        </AppRoute>
                    </LocaleProvider>
                </HashRouter>
            </Provider>
        </IntlProvider>
    ),

    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
