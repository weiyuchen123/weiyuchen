/**
 * @created by shilinghuai on 2019-3-27 15:38:07
 * @updated by
 * @description test
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
        return {
          yuform: {
            name: '',
            star: ''
          },
          options: [
            {
              value: 'a',
              label: '地球'
            },
            {
              value: 'b',
              label: '月亮'
            },
            {
              value: 'c',
              label: '月球'
            },
            {
              value: 'd',
              label: '火星'
            }
          ],
          rules: {
            name: [
              {required: true, message: '请输入名字', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        change: function () {
          alert(1);
        },
        removeChange: function () {
          alert(2);
          alert(input1);
        },
        close: function () {
          this.$refs.form.resetFields();
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