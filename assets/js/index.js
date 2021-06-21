$(function () {
  //JS 
  layui.use(['element', 'layer', 'util'], function () {
    var element = layui.element,
      layer = layui.layer,
      util = layui.util,
      $ = layui.$;

    //头部事件
    util.event('lay-header-event', {
      //左侧菜单事件
      menuLeft: function (othis) {
        layer.msg('展开左侧菜单的操作', {
          icon: 0
        });
      },
      menuRight: function () {
        layer.open({
          type: 1,
          content: '<div style="padding: 15px;">处理右侧面板的操作</div>',
          area: ['260px', '100%'],
          offset: 'rt' //右上角
            ,
          anim: 5,
          shadeClose: true
        });
      }
    });

  });
})
// 点击退出时的相关操作
$(function(){
  let layer = layui.layer;
  $("#bow-out").on('click',function () {
    layer.confirm('是否要退出?', function(index){
      localStorage.removeItem('token');
      window.location.href='../../login.html'
      layer.close(index);
    });   
  })
})
$(function () {
  loginCheck();

  function loginCheck() {
    $.ajax({
      type: "get",
      url: "/my/success",
      complete: function (res) {
        console.log(res.responseJSON.status);
        if (res.responseJSON.status !== 0) {
          localStorage.removeItem('token')
          window.location.href = '../../login.html';
        }
      }
    });
  }
})