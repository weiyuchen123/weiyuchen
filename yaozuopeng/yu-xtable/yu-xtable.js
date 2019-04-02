/**
 * @created by yaozuopeng on 2019-4-1 21:41:54
 * @updated by
 * @description x表格
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
          tabledata: [{
            date: '2018-12-28',
            name: 'zs',
            age: '16',
            sex: 'man'
          }, {
            date: '2019-01-06',
            name: 'ls',
            age: '20',
            sex: 'women'
          }, {
            date: '2018-05-10',
            name: 'ww',
            age: '19',
            sex: 'man'
          }],
          sexs: [
            { key: 'man', value: '男' },
            { key: 'women', value: '女' }
          ]
        };
      },
      methods: {
        s1: function (row, event, column, index) {
          alert(row.name);
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