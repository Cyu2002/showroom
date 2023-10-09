if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const and_url = "https://apis.bemfa.com/va/postmsg";
  function request_and(num_type, num_set) {
    if (num_type == 1) {
      if (num_set == 1) {
        uni.request({
          url: and_url,
          method: "POST",
          header: {
            "custom-header": "application/json"
          },
          data: {
            uid: "fed4ee5c5da54564b724892de4b32fa7",
            topic: "e8db8453b682",
            type: 3,
            msg: "q1"
          },
          success: (res) => {
            formatAppLog("log", "at my_web_com/aigc_net.js:19", res.data);
          }
        });
      } else if (num_set == 2) {
        uni.request({
          url: and_url,
          method: "POST",
          header: {
            "custom-header": "application/json"
          },
          data: {
            uid: "fed4ee5c5da54564b724892de4b32fa7",
            topic: "e8db8453b718",
            type: 3,
            msg: "q1"
          }
        });
      }
    }
  }
  function and_powersend(number_power) {
    switch (number_power) {
      case 1:
        request_and(1, 1);
        break;
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = {
    data() {
      return {
        flag_com: "关闭中",
        flag_an: "关闭中",
        text_of_web: "无数据"
      };
    },
    methods: {
      switchcom: function(get_flag) {
        if (get_flag.detail.value == 1) {
          uni.request({
            method: "POST",
            url: "https://songguoyun.topwd.top/Esp_Api_new.php",
            //仅为示例，并非真实接口地址。
            header: {
              "custom-header": "application/json"
            },
            data: {
              sgdz_account: "MLZZ",
              sgdz_password: "20020528Cyh",
              device_name: "AIGC-0",
              value: "11"
            },
            success: (res) => {
              formatAppLog("log", "at pages/index/index.vue:49", res.data);
              this.text_of_web = "request success";
              this.text_data = res.data;
            },
            fail: (res) => {
              this.text_of_web = "request fail";
            }
          });
          this.flag_com = "开启中";
        } else {
          this.flag_com = "关闭中";
        }
      },
      switchand: function(get_flag) {
        if (get_flag.detail.value == 1) {
          and_powersend(1);
          this.flag_an = "开启中";
        } else {
          this.flag_an = "关闭中";
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("text", null, "电脑控制："),
      vue.createElementVNode("br"),
      vue.createElementVNode(
        "switch",
        {
          style: { "margin-left": "1cm" },
          onChange: _cache[0] || (_cache[0] = (...args) => $options.switchcom && $options.switchcom(...args))
        },
        null,
        32
        /* HYDRATE_EVENTS */
      ),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($data.flag_com),
        1
        /* TEXT */
      ),
      vue.createElementVNode("br"),
      vue.createElementVNode("text", null, "安卓控制："),
      vue.createElementVNode("br"),
      vue.createElementVNode(
        "switch",
        {
          style: { "margin-left": "1cm" },
          onChange: _cache[1] || (_cache[1] = (...args) => $options.switchand && $options.switchand(...args))
        },
        null,
        32
        /* HYDRATE_EVENTS */
      ),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($data.flag_an),
        1
        /* TEXT */
      ),
      vue.createElementVNode("br"),
      vue.createElementVNode("button", {
        style: { "margin-left": "5cm" },
        class: "mini-btn",
        type: "warn",
        size: "mini"
      }, "刷新"),
      vue.createElementVNode("br"),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($data.text_of_web),
        1
        /* TEXT */
      ),
      vue.createElementVNode("br"),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString(_ctx.text_data),
        1
        /* TEXT */
      ),
      vue.createElementVNode("br")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/h_work/aigc_con/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/h_work/aigc_con/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
