// 在发起ajax请求时会先调用这个函数
$.ajaxPrefilter(function (options) {
    options.url='http://127.0.0.1'+options.url;
  })