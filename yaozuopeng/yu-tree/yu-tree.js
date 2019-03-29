/**
 * @created by yaozuopeng on 2019-3-29 10:49:38
 * @updated by
 * @description 树形控件
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
          regions: [{
            'name': 'region1'
          }, {
            'name': 'region2'
          }],
          props: {
            label: 'name',
            children: 'zones'
          },
          count: 1
        };
      },
      methods: {
        handleCheckChange: function (data, checked, indeterminate) {
          alert(data, checked, indeterminate);
        },
        handleNodeClick: function (data) {
          alert(data);
        },
        loadNode: function (node, resolve) {
          if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }]);
          }
          if (node.level > 3) {
 return resolve([])}

          var hasChild;
          if (node.data.name === 'region1') {
            hasChild = true;
          } else if (node.data.name === 'region2') {
            hasChild = false;
          } else {
            hasChild = Math.random() > 0.5;
          }

          setTimeout(function () {
            var data;
            if (hasChild) {
              data = [{
                name: 'zone' + this.count++
              }, {
                name: 'zone' + this.count++
              }];
            } else {
              data = [];
            }

            resolve(data);
          }, 500);
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