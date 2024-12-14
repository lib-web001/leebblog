---
tag:
  - 前端
---

# promise

## 静态方法

1. promise.all 所有的 resolve
2. promise.race 任何一个接口先完成就可以，无论是成功还是报错
3. promise.any 任何一个接口先完成的，必须成功
4. promise.allSellect 无论成功或者失败，全部执行 {status:'fulfilled'|'rejected',reason:''}

## 手写 promise

```javascript

class Promise{
  cbs=[]

  constructor(invoke){
    invoke(this.resolve.bind(this));
  }

  then(callback){
    tis.cbs.push(callback);
  }

  resolve(value){
    this.cbs.forEach(c=>{
      c(value);
    })
  }
}
```
