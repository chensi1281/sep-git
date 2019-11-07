/**
 * Created by Administrator on 2019/10/24.
 */
function createSquare(config) {
    console.log("abcdefg");
}
var mySearch;
mySearch = function (src, sub) {
    // 函数类型的类型检查中参数名不需要和接口中定义的名字相匹配
    // 只要对应位置上的参数类型是兼容的即可
    // 不想指定类型也可以，typescript的类型系统会推断出参数类型
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["bob", "fred"];
var myStr = myArray[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock;
}());
