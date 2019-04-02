/**
 * @created by yaozuopeng on 2019-4-1 21:47:10
 * @updated by
 * @description 动态表单组件
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
      templateData: [
        {
          order: 1,
          column: 2,
          title: '读者信息',
          collapse: true,
          fields: [
            { field: 'auditor', label: '审核人', order: 2 },
            { field: 'type',
              label: '类型',
              ctype: 'select',
              rules: 'required',
              value: '01',
              options: [
                {key: '01', value: '草稿'},
                {key: '02', value: '已发布'},
                {key: '03', value: '已删除'}
              ],
              linkage: function (ref, field, groupfield, xdynamicfield) {
                if (field.type === '01') {
          ref.$set(groupfield, 2, { field: 'auditor', label: '审核人', order: 2, disabled: true });
                } else {
        ref.$set(groupfield, 2, { field: 'auditor', label: '审核人', order: 2, disabled: false });
                }
              }},
            { field: 'status',
              label: '状态',
              ctype: 'select',
              options: [
                {key: 'US', value: '美国'},
                {key: 'CN', value: '中国'},
                {key: 'JP', value: '日本'},
                {key: 'OU', value: '欧元区'}
              ]},
            { field: 'pageviews', label: '阅读数', unit: '万元', ctype: 'num', value: '' }
          ]
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