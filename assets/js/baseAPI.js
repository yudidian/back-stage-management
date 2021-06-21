// 在发起ajax请求时会先调用这个函数
$.ajaxPrefilter(function (options) {
  if(options.url.indexOf('success')!==-1){
    let token=localStorage.getItem('token');
    options.headers={
      Authorization:token,
    }
  }
    options.url='http://127.0.0.1'+options.url;
  })