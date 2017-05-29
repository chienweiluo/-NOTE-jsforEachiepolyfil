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

// unit testing

var array1 =[]
var array2 =[]

array1.push(1);
array1.push(2);
array1.push(3);
array1.push(4);
array1.push(5);

//array1 =[1,2,3,4,5]

array1.forEach(function(e){
  if(e%2==0){
    array2.push(e)}
    return
  else{
    return
  }
})
