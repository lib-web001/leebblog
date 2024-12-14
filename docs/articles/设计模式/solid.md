---
tag:
  - 设计模式
---
# solid 5 大设计原则

低耦合高内聚 灵活 健壮 稳定

## single 单一职责

一个类只做单一功能

```
interface IAmount{
  amount(){} // 订单额
}
class order implements IAmount{
  amount(){}
}

clsas Subscription implements IAmount{
  amount(){}
}

class Membership implements IAmount{
  amount(){}
}
class Payment{
  pay(IAmount a){
    a.amount();
  }
}
```

## open close 开闭原则

扩展开放,修改关闭 继承或者注入

## Li 李四替换

年轻人固然有自己的想法，但是祖宗的规矩不能忘记
子类继承父类不要重写而是另启一个方法实现

1. 尽量不重写父类方法
2. 重写的得保证没有副作用

# iterface 接口分离

interface 拆分更细粒度

# dependency 依赖倒置

1.不要在一个类里面 new 另一个类, 而是应该注入使用 2.注入时应该用接口约束，而不是类约束
