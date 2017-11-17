const idCardRegExp=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
var options = {
  validators: {
    'idcard': function (value, attrValue, vnode) {
      console.log("你自定义的验证规则生效啦！")
      return idCardRegExp.test(value);
    }
  }
}

export default options
