/**
 * @created by yaozuopeng on 2019-4-1 21:38:51
 * @updated by
 * @description form表单组件
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
        var agecheck = function (rule, value, callback) {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          } else {
            callback();
          }
        };
        return {
          yuform: {
            pname: '',
            page: ''
          },
          rule1: {
            page: [
              { validator: agecheck, trigger: 'blur' }
            ],
            pname: [
              { required: true, message: '姓名不能为空', trigger: 'blur' }
            ]
          },
          padr: '',
          psex: [
            { key: 'man', value: '男' },
            { key: 'women', value: '女' }
          ]
        };
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