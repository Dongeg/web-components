// 引入安装的mock.js
import Mock from 'mockjs';
/**
 * 声明一个模拟接口
 * 用axios获取数据时直接访问"http://mockdata/data"
 * */
let message=Mock.mock('http://mockdata/data', {
  "dataNum":96, //数据总数
  "pageData":10, //每页显示多少条数据
  "curr" :1,  //当前页
  "data|10":[  /**data为一个数组，生成10条数据*/
    {
      /**下面的意思是从数组中随机取一个值为当前值*/
      'name|1':["洛天依","初音未来","小冰","宫本武藏","不知火舞","新垣结衣"],
      'age|1':[16,17,18,19,20,21,22,23],
      'comment|1':["世界如此美妙，我却如此暴躁，这样不好，不好",
                   "来发子弹吧",
                   "老兵不死，只会逐渐凋零",
                   "有时候肌肉比头脑管用",
                   "别靠近我"]
    }
  ]
});
export default{
  message,
}

