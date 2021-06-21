$(function () {
    var layer = layui.layer;
    getGoods()



    // 点击修改弹出询问框
    $('#item').on('click', '#updata', function () {
        var oldPrice=$(this).parent().siblings('.price').text()
        var id=$(this).parent().siblings('.id').text()
        var patter=/^[0-9\.]{1,10}$/
        layer.prompt({
            formType: 0,
            value: oldPrice,
            maxlength: 140, 
        }, function (value, index, elem) {
            if(value===oldPrice){
                layer.msg('价格没有发生改变', {
                    icon: 0,
                    time: 4000 //2秒关闭（如果不配置，默认是3秒）
                  }, function(){
                    //do something
                  });
            }else if(!patter.test(value)){
                layer.msg('价格只能是数字', {
                    icon: 0,
                    time: 4000 //2秒关闭（如果不配置，默认是3秒）
                  }, function(){
                    //do something
                  });
            }else{
                var time=getTime();
               $.ajax({
                   type: "post",
                   url: "/backstage/updatePrice",
                   data: {
                       newPrice:value,
                       id:id,
                       date:time
                   },
                   success: function (res) {
                       if(res.status!==0){
                        layer.msg(res.msg, {
                            icon: 0,
                            time: 4000 //2秒关闭（如果不配置，默认是3秒）
                          });
                       }else{
                        layer.msg(res.msg, {
                            icon: 0,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          },function(){
                           location.reload();
                          });
                       }
                   }
               });
            }
            layer.close(index);
        });
    })
    // 获取商品列表
    function getGoods() {
        $.ajax({
            type: "get",
            url: "/goods/getGoods",
            data: {
                name: '水果制品'
            },
            async:true,
            success: function (res) {
                if (res.status === 0) {
                    layer.msg('水果制品列表获取成功', {
                        icon: 1,
                        time: 2000
                    }, function () {
                        //do something
                    });
                }
                var htmlstr = template('items', res);
                $("#item").append(htmlstr);
            }
        });
    }
    //获取当前时间
    function getTime() {
        var date=new Date();
        var y=date.getFullYear();
        var M=date.getMonth()+1;
        var d=date.getDate();
        var h=date.getHours();
        var f=date.getMinutes();
        var s=date.getSeconds();
        var time=y+'-'+M+'-'+d+'  '+h+':'+f+':'+s;
        return time;
      }
})
$(function () {
    let layer = layui.layer;
    loginCheck();
    function loginCheck() {
      $.ajax({
        type: "get",
        url: "/my/success",
        complete: function (res) {
          console.log(res.responseJSON.status);
          if (res.responseJSON.status !== 0) {
              localStorage.removeItem('token')
              window.location.href ='../../login.html';
          }
        }
      });
    }
  })