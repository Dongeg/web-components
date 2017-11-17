// 引入安装的mock.js
import Mock from 'mockjs';
/**
 * 声明一个模拟接口
 * 用axios获取数据时直接访问"http://mockdata/data"
 * */
let message=Mock.mock('http://mockdata/data', {
    'treeData|10':[
      {
        'label|1':["中国","美国","英国","日本","澳大利亚","冰岛"],
        'children|1-5': [{
          'label|1':["宫保鸡丁","佛跳墙","墨西哥卷饼","冰糖燕窝","热香饼","仰望星空","鲱鱼罐头","香槟","甜甜圈","香菜","关东煮"],
          'children|0-2': [{
            'label|1':["酸","甜","苦","辣","咸"]
          }]
        }]
      }
    ],
    defaultProps: {
      children: 'children',
      label: 'label'
    }
});
export default{
  message,
}
