# JsforEachOnIE

JsforEachOnIE

`forEach(fn(), thisValue)`

    in IE
    alert(Array.prototype.forEach);  //undefind

Array.forEach implementation for IE support

為了解決在IE無法正常工作的forEach, 所以手動添加在此作為紀錄!

    if (!Array.prototype.forEach){
    Array.prototype.forEach = function(callback, thisArg){
    var T, k;
    if (this ==null){
        throw new TypeError("NULL or undefined");
    }
    var O = Object(this);
    var len = O.length >>>0; //將O.length 轉為UInt32編碼
    if({}.toString.call(callback) != "[object Function]") {
      throw new TypeErroe(callback +"IS NOT A FUNCTION");
    }
    if (thisArg){
      T = thisArg
    }
    k =0;
    while (k< len){
      var kValue;
      if (k in O){
        kValue = O[k];
        callback.call(T,kValue,k,O);
      }
      K++;
    }
    }
    }


參考資料: [MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach),[Oscar's MSDN](http://blog.csdn.net/oscar999/article/details/8671546)
