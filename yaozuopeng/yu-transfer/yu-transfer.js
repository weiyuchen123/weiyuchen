/**
 * @created by yaozuopeng on 2019-3-29 09:51:44
 * @updated by
 * @description 穿梭框
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
        var generateData = function () {
          var data = [];
          for (var i = 1; i <= 15; i++) {
            data.push({
              key: i,
              label: '备选项' + i,
              disabled: i % 4 === 0
            });
          }
          return data;
        };
        return {
          data: generateData(),
          value3: [1],
          renderFunc: function (h, option) {
            return h('span', option.key + '-' + option.label);
          }
        };
      },

      methods: {
        handleChange: function (value, direction, movedKeys) {
          alert(value, direction, movedKeys);
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