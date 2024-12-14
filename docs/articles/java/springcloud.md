---
tag:
  - java
---

## sentinel ali 流量卫兵

## eureka 三步

```
1.配eurekaserver eureka.client.service-url.defaultZone: eurekaserver地址相同因为要集群
2.用户订单微服务注册到eurekaserver中
3.服务发现将eureka的配置信息copy到微服务中去
```

## 负载均衡策略

```
随机
轮询
restryrule （重试）
clientconfigurationloadbalancerule （客户端轮询）
默认根据时区选择 轮询
重写轮询算法实现irule接口
```

## nacos

```
服务分级存储模型
1级服务
2级集群
3级地域
```

## namespace 和 cluster 区别

```
namespace环境隔离,完全隔离不通namespace之间的服务不能访问,根据namespaceid划分
cluster 地域划分，相同地域优先访问，其次去找其他地域的集群

ephemeral 区分临时实例和非临时实例 健康状态变了  亲生和非亲生

nacos和eureka区别
nacos当服务服务不可用时会主动推送消息告诉服务调用者,eureka则不会
server1->30秒一次pull>server3 (eureka)
service2->pull-><push<(nacos)
cap模式 (一致性，可用性，分区容错性)
一致性和可用性不可能同时存在
eureka ap模式
nacos ap模式当服务提供者中有非临时实例则会变化成为cp模式
当订单交易的时候选择cp
```

## feign

```
加入依赖
@enabledfeignclients
写client
@feignclien("service")
@get("*")
```

## sentinel 流控 、降级处理、监控

```
线程隔离两种方式
线程池隔离，信号量（默认）
超时异步
```

## 断路器的三个状态

```
closed open 半开
```

## 流控模式

```
直接,关联,链路
流控效果
快速失败, 渐变 3 默认 ，等待
```

## seata 分布式事务
