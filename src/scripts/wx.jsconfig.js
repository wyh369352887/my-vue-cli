import axios from 'axios';
import { Dialog, Toast } from 'vant';

/* eslint-disable */
var wxReady = false;

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

function $axios(url, data, callback) {
    axios({
        method: 'post',
        url: url,
        data: JSON.stringify(data),
    }).then(function (res) {
        if (res.status == 200) {
            callback(res.data);
        }
        Toast.clear();
    }).catch(function (res) {
        console.log(res);
        Toast.clear();
    })
}

function init_wxshare() {
    $axios(window.shareData.apiUrl, { url: location.href }, function (res) {
        if (res.status == 0) {
            load_wx(res.data);
        } else {
            Dialog.alert({
                title: '提示',
                message: res.msg
            })
        }
    })
}

//加载微信接口参数
function load_wx(data) {
    console.log(data)
    wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.signature,
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });
    wx.ready(function () {
        if (wxReady) {
            [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'chooseWXPay',
                'openAddress',
            ]
        }
        wx.onMenuShareAppMessage({
            title: window.shareData.title,
            desc: window.shareData.desc,
            link: window.shareData.link,
            imgUrl: window.shareData.imgUrl,
            success: function (res) {
                console.log(res)
            }
        });
        wx.onMenuShareTimeline({
            title: window.shareData.title,
            link: window.shareData.link,
            imgUrl: window.shareData.imgUrl,
            success: function (res) {
                console.log(res)
            }
        });
        wx.onMenuShareQQ({
            title: window.shareData.title,
            desc: window.shareData.desc,
            link: window.shareData.link,
            imgUrl: window.shareData.imgUrl
        });
        wx.onMenuShareWeibo({
            title: window.shareData.title,
            desc: window.shareData.desc,
            link: window.shareData.link,
            imgUrl: window.shareData.imgUrl
        });
        wx.hideMenuItems({
            menuList: [
                'menuItem:openWithQQBrowser',
                'menuItem:openWithSafari',
                'menuItem:share:email',
                'menuItem:readMode',
                'menuItem:copyUrl',
                'menuItem:exposeArticle',
                'menuItem:setFont',
                'menuItem:refresh'
            ]
        });
    });
    wx.error(function (res) {
        wxReady = true;
    });
}

export {
    init_wxshare
}