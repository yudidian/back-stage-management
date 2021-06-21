$(function () {
  // 登录时候的密码验证规则
  var form = layui.form;
  var layer = layui.layer;
  var flag = false;
  form.verify({
    pass: [
      /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    ]
  });
  form.on('submit(login)', function (data) {
    var username = $('#username').val();
    var password = $('#password').val();
    var check=$('#check').val();
    $.ajax({
      type: "post",
      url: "/backstage/login",
      data: {
        username,
        password,
        check,
      },
      success: function (res) {
        if (res.status !== 1) {
          layer.msg('登陆成功', {
            icon: 1,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function () {
            localStorage.setItem('token',res.token)
            window.location.href = '../../index.html';
          });
        } else {
          layer.msg(res.msg, {
            icon: 2,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          });
        }
      }
    });
    return false;
  });
  //看不清换一张绑定事件
  $('.change').on('click',function () {
    checkImg();
    })
  checkImg()
  function checkImg() {
    $.ajax({
      type: "get",
      url: "/backstage/check",
      success: function (res) {
        $('.checkImg').html(res.data);
      }
    });
    }
})