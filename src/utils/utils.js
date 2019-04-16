class utils {
  constructor() {
    this.instance = null;
  }
  //单例模式
  static getInstance() {
    if (!this.instance) {
      this.instance = new utils();
    }
    return this.instance;
  }
  test(){
    return function(){
          console.log('test');
    }
  }
  /* 格式化日期 */
  DateFormat(fmt) {
      var o = {
          "M+": this.getMonth() + 1,  // 月份
          "d+": this.getDate(),		// 日
          "h+": this.getHours(),		// 小时
          "m+": this.getMinutes(),	// 分
          "s+": this.getSeconds(),	// 秒
          "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
          "S": this.getMilliseconds() // 毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
  }

  //只允许输入数字
  checkNumber(e) {
    var keynum = window.event ? e.keyCode : e.which;
    if ((48 <= keynum && keynum <= 57) || keynum == 8) {
      return true;
    } else {
      return false;
    }
  }
  //只允许输入小数
  checkForFloat(obj, e) {
    var isOK = false;
    var key = window.event ? e.keyCode : e.which;
    if ((key > 95 && key < 106) || //小键盘上的0到9
      (key > 47 && key < 60) || //大键盘上的0到9
      (key == 110 && obj.value.indexOf(".") < 0) || //小键盘上的.而且以前没有输入.
      (key == 190 && obj.value.indexOf(".") < 0) || //大键盘上的.而且以前没有输入.
      key == 8 || key == 9 || key == 46 || key == 37 || key == 39) {
      isOK = true;
    } else {
      if (window.event) { //IE
        e.returnValue = false; //event.returnValue=false 效果相同.
      } else { //Firefox
        e.preventDefault();
      }
    }
    return isOK;
  }

  //四舍五入函数
  ForDight(Dight, How) {
    Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
    return Dight;
  }

}

export default utils.getInstance();
