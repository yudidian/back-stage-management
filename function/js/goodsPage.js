$(function () {
    layui.use('table', function () {
        var table = layui.table;
        //第一个实例

        table.render({
            elem: '#demo',
            height: 400,
            url: '/backstage/paging',
            page: true,
            limit: 8,
            count: 32,
            jump: function (obj, first) {
                console.log(obj.curr);
                console.log(obj.limit);
            },
            parseData: function (res) {
                return {
                    "code": res.status, //解析接口状态
                    "msg": res.msg, //解析提示文本
                    "count": 32, //解析数据长度
                    "data": res.data //解析数据列表
                }
            },
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: 'ID',
                        width: 80,
                        sort: true,
                        fixed: 'left'
                    }, {
                        field: 'goods_name',
                        title: '商品名称',
                        width: 160
                    }, {
                        field: 'goods_tile',
                        title: '商品简介',
                        width: 680,
                    }, {
                        field: 'goods_price',
                        title: '商品价格',
                        width: 140,
                        sort: true
                    }, {
                        field: 'goods_sales',
                        title: '商品销量',
                        width: 140,
                        sort: true
                    }, {
                        field: 'classification',
                        title: '商品分类',
                        width: 180,
                    }, {
                        field: 'data',
                        title: '近期改动时间',
                        width: 180,
                    }
                ]
            ],

        });

    })
})