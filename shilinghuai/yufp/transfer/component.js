/**
 * @created by shilinghuai on 2019-4-1 18:07:11
 * @updated by
 * @description 组件
 */
define(function (require, exports) {
  /**
   * 页面加载完成时触发
   * @param hashCode 路由ID
   * @param data 传递数据对象
   * @param cite 页面站点信息
   */
  exports.ready = function (hashCode, data, cite) {
    yufp.custom.vue({
      el: cite.el,
      data: function () {
        var getData = function () {
          var data = [];
          var planets = ['地球', '火星', '水星', '木星', '土星'];
          planets.forEach(function (planet, index) {
            data.push({
              label: planet,
              key: index
            });
          });
          return data;
        };
        return {
          value: [],
          data: getData()
        };
      },
      methods: {
        change: function (value, move, key) {
          alert(value + '' + move + '' + key);
        }
      }
    });
  };

  /**
   * 页面传递消息处理
   * @param type 消息类型
   * @param message 消息内容
   */
  exports.onmessage = function (type, message) {
  };

  /**
   * 页面销毁时触发destroy方法
   * @param id 路由ID
   * @param cite 页面站点信息
   */
  exports.destroy = function (id, cite) {
  };
});