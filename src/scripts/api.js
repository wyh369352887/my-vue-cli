import axios from 'axios';
import { Dialog, Toast } from 'vant';
/* eslint-disable no-alert, no-console */

var baseURL = location.origin;//生产域名
// var baseURL = '/api';//反向代理

/* 添加axios拦截器 */
axios.interceptors.request.use(function (config) {
    Toast.loading({
        message: '加载中...',
        duration: 0,
        forbidClick: true
    })
    return config;
}, function (error) {
    console.log(error + '---from axios拦截器');
    return Promise.reject(error);
});


/* 封装请求 */
function $axios(url, data, callback) {
    axios({
        method: 'post',
        url: url,
        baseURL: baseURL,
        data: JSON.stringify(data),
    }).then(function (res) {
        Toast.clear();
        if (res.status == 200) {
            // if (res.data.status == 2) {
            if (res.data.status == 1 || res.data.status == 5) {
                /* 判断登陆过期 */
                location.href = location.origin + '/filter/index.html';
            } else {
                callback(res.data);
            }
        }
    }).catch(function (res) {
        Toast.clear();
        console.log(res);
    })
}

/* example */
function some_request(data, callback) {
    $axios('/path_to_api', data, function (res) {
        callback(res);
    })
}

export {
    some_request,
}