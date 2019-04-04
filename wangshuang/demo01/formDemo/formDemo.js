/**
 * @created by yourEmail Y-m-d
 * @updated by
 * @description 空白模板
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
          var courses = ['数据结构', '数据库', 'java', 'vue', 'linux'];
          courses.forEach(function (course, index) {
            data.push({
              label: course,
              key: index
            });
          });
          return data;
        };
        return {
          yuform: {
            name: '',
            deptName: '',
            sex: '',
            city: '',
            checkList: [],
            birthday: '',
            value: []
          },
          options: [{
            value: 'a',
            name: '北京'
          }, {
            value: 'b',
            name: '天津'
          }, {
            value: 'c',
            name: '上海'
          }, {
            value: 'd',
            name: '杭州'
          }],
          data: getData()
        };
      },
      methods: {
        submit: function () {
          this.$refs.form.validate(function (valid) {
            if (valid) {
              alert('submit!');
            } else {
              alert('failed');
              return false;
            }
          });
        },
        reset: function () {
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