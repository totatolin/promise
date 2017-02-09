function btn(){
  pro().then(function(value) {
    console.info (value);
  }, function(error) {
    console.info (error);
  });
}
function pro() {
  var promise = new Promise(function(resolve, reject) {
    if (true) {
      resolve('成功');
    } else {
      reject('失败');
    }
  });
  return promise;
}
