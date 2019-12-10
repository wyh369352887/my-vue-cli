<template>
  <div id="app">
    <!-- <router-view/> -->
    test share
  </div>
</template>

<script>
import VConsole from "vconsole";
// import { init_wxshare } from "./scripts/wx.jsconfig";

export default {
  name: "app",
  created() {
    (function() {
      /* 移动端适配方案 */
      var html = document.getElementsByTagName("html")[0];
      var setFontSize = function() {
        var width = html.getBoundingClientRect().width;
        width = Math.round(width);

        if (width > 414) width = 414;
        if (width < 320) width = 320;

        var fontSize = width / 750 * 100;
        html.style.fontSize = fontSize + "px";
      };
      setFontSize();
      var a;
      var c = function() {
        clearTimeout(a);
        a = setTimeout(setFontSize, 25);
      };
      window.addEventListener("resize", c);

      /* 添加vconsole */
      if (location.href.indexOf("debug") > -1) {
        new VConsole();
      }
    })();
  },
  mounted() {
    /* 设置微信分享 */
    var api = location.origin;
    /*
		 * 分享常量设置
		 */
    window.shareData = {
      title: "年糕保险智能诊断工具", //分享标题
      desc: "仅60s就知晓该如何配置保险，点我测试吧！~", //分享文案
      link: location.origin + "/filter/index.html", //分享后跳转链接
      imgUrl: api + "/filter/static/wxshare.png", //分享图片链接
      apiUrl: api + "/api/wxjsconfig" //分享参数请求API
    };
    // init_wxshare();
  }
};
</script>

<style>
@import url("./style/reset.css");
#app {
  width: 100%;
  height: 100%;
  max-width: 414px;
  min-width: 320px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
}
</style>
