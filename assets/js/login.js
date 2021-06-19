$(function () {
  // 登录时候的密码验证规则
  var form = layui.form;
  var layer = layui.layer;
  var flag = false;
  console.log(form);
  form.verify({
    pass: [
      /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    ]
  });
  $("#btn-login").on('click', function (e) {
    e.preventDefault();
    // 登录的相关操作
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
      type: "post",
      url: "/backstage/login",
      data: {
        username,
        password
      },
      success: function (res) {
        console.log(res);
        if (res.status !== 1) {
          layer.msg('登陆成功', {
            icon: 1,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function () {
            window.location.href='../../index.html';
          });
        } else {
          layer.msg('登陆失败', {
            icon: 2,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function () {
            //do something
          });
        }
      }
    });
  })

})