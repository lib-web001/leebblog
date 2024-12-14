---
tag:
  - java
---

## 优点

```
● 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑

● 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作

● 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求

● 支持 Lambda 形式调用：通过 Lambda 表达式，方便地编写各类查询条件，无需再担心字段写错

● 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题

● 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作

● 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）

● 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用

● 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询

● 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库

● 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询

● 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作
```

## mybatis 标签

### 1.if 标签

```
查询的时候因为后面的if判断后拼接的判断条件都要带and连接，所以必须在where后首先接上1=1，防止出错，或者使用where标签
```

### 2.where 标签

```
MyBatis会将where标签中拼装的SQL语句中多余出来的and和or去掉，但是where只会去掉第一个多出来的and或者or，所以要把and或者or写在前面
```

### 3.trim 标签

```
prefix：前缀，给拼串后的整个字符串加一个前缀
prefixOverrides：前缀覆盖，去掉整个字符串前面多余的字符
suffix：后缀，给拼串后的整个字符串加一个后缀
suffixOverrides：后缀覆盖，去掉整个字符串后面多余的字符
```

### 4.choose 标签

```
分支选择：相当于switch-case，含子标签when, otherwise
```

### 5.set 标签-UPDATE 子标签

#### 更新指定项

```xml
<!-- public void updateEmp(Employee employee); -->
<update id="updateEmp">
   update tbl_employee
<set>
    <if test="lastName!=null">
     last_name=#{lastName},
    </if>
    <if test="email!=null">
     email=#{email},
    </if>
    <if test="gender!=null">
      gender=#{gender}
  </if>
</set>
 where id=#{id}
</update>

注意：set中的if中写的设置语句后的逗号","不能省略，不然就无法一次更新多个信息了
想达到此效果也可用trim标签完成，只需要将原来的set处的标签改为
<trim prefix="set" suffixOverrides=","></trim>
```

### 6.foreach 标签

```
1. collection：指定要遍历的集合
2. list 类型的参数会特殊处理封装在 map 中，map 的 key 就叫 list
3. item：将当前遍历出的元素赋值给指定的变量
4. separator：表示每个元素与每个元素之间的分隔符
5. open：为遍历出的结果拼接一个开始的字符
6. close：为遍历出的结果拼接一个结束的字符
7. index：索引。遍历 list 的时候 index 表示的就是索引，item 就是 map 的值；遍历 map 的时候 index 表示的就是 map 的 key，item 就是 map 的值
   作用：可以将 OGNL 表达式绑定到一个变量中，方便后来引用这个变量的值
```

### 7.bind 标签

```
增删改查标签内还有一个 bind 子标签，是绑定的意思

<bind name="_lastName" value="'%'+lastName+'%'">

这样就相当于在原先的 lastName 的值的两端加上了%，方便使用 like 查询，这样在接下来写就可以写 like #{*lastName}了，在 Java 的方法中也不用再每次都手动加%了
不推荐使用这种方式，要是模糊查询还是每次在 Java 方法中自己加%、*等符号比较好，这样查询的操作自由度要更高，规则有变的情况下不需要更改的配置值
8.sql 标签与 include 标签
与增删改查标签同级，可以将使用频率比较高的 sql 语句部分写入 sql 标签中

<sql id="insertColumn">
  employee_id,last_name,email
</sql>

insert into employees(
  <include refid="insertColumn"></include>
)
当数据库类型不同，导致需要保存的东西不同时，可以在 sql 标签内写<if>子标签判断\_databaseId 即可
在<include>标签内还可以用<property name="xxx" value="aaa">标签自定义一些属性，在<sql>标签中可以用${xxx(name属性值)}来调用，注意是$不是#
```
