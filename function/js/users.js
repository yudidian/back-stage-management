$(function () {
    const layer=layui.layer;
    getUsers()
    function getUsers() {
        $.ajax({
            type: "get",
            url: "/backstage/users",
            success: function (res) {
                if(res.status!==0){
                    layer.msg(res.msg, {
                        icon: 1,
                        time: 1500 
                      });  
                }else{
                    const htmlStr=template('items',res);
                    $('#head').html(htmlStr);
                    layer.msg(res.msg, {
                        icon: 1,
                        time: 1500 
                      },function () {
                         
                        }); 
                }
            }
        });
      }
  })