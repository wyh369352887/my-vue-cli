import axios from 'axios';
import { MessageBox } from 'mint-ui';

var baseURL = location.origin;//生产域名
// var baseURL = '/api';//反向代理

/* 添加axios拦截器 */
axios.interceptors.request.use(function (config) {
    if (document.getElementById('waiting')) {
        document.getElementById('waiting').style.display = 'block';
    }
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
        if (document.getElementById('waiting')) {
            document.getElementById('waiting').style.display = 'none';
        }
        if (res.status == 200) {
            // if (res.data.status == 2) {
            if (res.data.status == 1) {
                /* 判断登陆过期 */
                location.href = location.origin + '/front/static/login.html';
            } else {
                callback(res.data);
            }
        }
    }).catch(function (res) {
        console.log(res);
    })
}
