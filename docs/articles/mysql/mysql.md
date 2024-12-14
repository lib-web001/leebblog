---
tag:
  - sql
---

# mysql

## 常用 sql

```
update 表名 set 指定字段 = replace(指定字段,'要替换的字符串','想要的字符串') where 条件
```

### 修改mysql密码

##### 更改密码

alter user 'root'@'localhost' identified with mysql_native_password by 'xxxxx';

##### 刷新权限

flush privileges;

```
(二)多表查询：子查询 
注意一：子查询的写法更符合人的思维方式 
注意二：子查询属于高级查询，可以对查询效率进行优化。延迟加载。 
 
查询小刘所在公司（多表链接的写法） 
SELECT c.name 公司名 
FROM company.c,member m 
WHERE c.id = m.comid AND m.name = '小刘'  
 
(1)SELECT 子查询 
SELECT (SELECT name FROM company WHERE id = comid) 公司名 
FROM member  
WHERE name = '小刘' 
 
(2)WHERE 子查询 
查询小刘和小王的公司名  
SELECT name 公司名 
FROM company  
WHERE id IN (SELECT comid FROM member WHERE name = '小刘' OR name = '小王') 
 
(3)from子查询 
注意：主要用于3张表以上的链接查询 
举例：有A，B，C三张表。先查询AB两种表，再用查询结果和C表链接查询 
查询小刘所在公司 
注意：SELECT子查询和WHERE子查询是把查询的结果当作数据。而FROM子查询是把查询结果当成表来看待。 
 
SELECT c.name 公司名 
FROM (SELECT name n,comid c FROM member WHERE name = '小刘') t1,company c 
WHERE t1.c = .c.id 
```

```
（1）添加，修改，删除这三个操作只用于单表 
（2）多表的级联删除，多表的级联更新有时会出现。 
（3）多表查询的策略有两种：多表联查，子查询 
 
创建一个公司表 
CREATE TABLE company( 
id INT PRIMARY KEY , 
name VARCHAR(255) NOT NULL 
); 
INSERT INTO company VALUES(1,'IBM') 
INSERT INTO company VALUES(1,'HP') 
 
创建一个员工表 
CREATE TABLE member( 
id INT(2) PRIMARY KEY , 
name VARCHAT(255) NOT NULL, 
sal DOUBLE(10,2), 
comid INT 
); 
INSERT INTO member VALUES(101,'小李',3000,1) 
INSERT INTO member VALUES(102,'小王',4000,1) 
INSERT INTO member VALUES(103,'小刘',5000,2) 
INSERT INTO member VALUES(104,'小刚',6000,2) 
 
 
(一)多表查询：同时查询多张表 
(1)笛卡尔积 
SELECT * 
FROM conpany,member      //查询结果是两表相乘，笛卡尔积（A表有m条数据，B表有n条数据，结果m*n条） 
 
(2)如果要查询n张表，必须要指定n-1个公共列的条件，否则会产生笛卡尔积 
SELECT * 
FROM conpany c,member m 
WHERE c.id = m.comid 
 
 
(3)查询IBM的员工信息 
SELECT m.* 
FROM company c,member m 
WHERE c.id = m.comid AND c.name = 'IBM' 
 
(4)小刘的公司信息 
SELECT c.name 
FROM company.c,member m 
WHERE c.id = m.comid AND m.name = '小刘'  
 
 
(5)左连接，以左表为主表，左表中满足条件的记录会查询出来，不满足的条件也会被查出来 
SELECT c.name 
FROM company c LEFT JOIN member m ON c.id = m.comid 
 
(6)右连接，以右表为主表，右表中满足条件的记录会查询出来，不满足的条件也会被查出来 
SELECT c.name 
FROM member m RIGHT JOIN company c ON c.id = m.comid 
 
(7)内连接 
SELECT c.name 
FROM member m INNER JOIN company.c ON c.id = m.comid 
 
```

```
(1)SELECT子语句 
SELECT * FROM person; 
SELECT name,dep FROM person 
SELECT name n,dep d FROM person 

(2)FROM子语句 
SELECT * FROM person; 
SELECT * FROM person t;  
SELECT t.id ,t.'name' FROM person t;  
(3)WHERE子语句 
比较运算符 
SELECT * FROM job WHERE age > 20 
SELECT * FROM job WHERE age >= 20 
SELECT * FROM job WHERE age < 20 
SELECT * FROM job WHERE age <= 20 
SELECT * FROM job WHERE age = 20 
SELECT * FROM job WHERE age != 20 
逻辑运算符 
SELECT * FROM job WHERE age > 20 AND age < 25  AND  sex = '男' 
SELECT * FROM job WHERE positon = '美工' or positon = '实习生'   //@1 
数字区间运算符 
SELECT * FROM job WHERE age BETWEEN 18 AND 19    //包括18和19  
SELECT * FROM job WHERE age NOT BETWEEN 18 AND 19   //逻辑非 
集合运算符 
SELECT * FROM job WHERE positon in ('美工','实习生')     //和@1等价 
SELECT * FROM job WHERE age in (18,20,27)      
模糊查询运算符 
匹配符：_ 下划线 匹配一个任意字符   % 百分号 匹配零个或者多个任意字符。注意like模糊查询只能用于字符类型。 
SELECT * FROM job WHERE name LIKE '郭_'      //郭名，郭大，郭奎 
SELECT * FROM job WHERE name LIKE '郭%'          //郭名，郭大，郭奎，郭飞翔，郭大牛 
SELECT * FROM job WHERE name LIKE '&郭%'        //郭名，郭大，郭奎，郭飞翔，郭大牛，小郭，。。。带就算 
空NULL  解释 ：表示空的意思，未知，没有。不是0，不是空字符串。 
SELECT * FROM person WHERE dep IS NULL    //注意：判断空必须用is 
SELECT * FROM person WHERE dep IS NOT NULL  
(4)GROUP BY 分组子语句 
分组的理解：相同的是一组。按照组来显示数据。几组就显示几条记录。 
分组的注意事项：分组的时候，SELECT显示的字段有约束条件。1是分组的组名，2是聚合函数 
SELECT sex FROM job GROUP BY sex 
SELECT sex, MAX(age) 最大,MIN(age) 最小,COUNT(*) 个数,SUM(age) 求和,AVG(age) 求平均 FROM job GROUP BY sex 

(5)HAVING 分组过滤的条件语句。注意跟WHERE的区分。WHERE对每一条记录进行过滤筛选，HAVING是对组进行过滤筛选，分组之后才能使用HAVING。 
SELECT source s，count (*) c FROM job GROUP BY s HAVING c (*) >10  

(6)ORDER BY 排序 
SELECT * FROM job ORDER BY age;   //默认按照升序排序    ASC升序关键字 
SELECT * FROM job ORDER BY age DESC;   //实现降序    DESC升序关键字 


同时使用6个语句的查询语句 
SELECT positon,count(*) 
FROM job 
WHERE age > 20 
GROUP BY position  
HAVING count(*) > 10 
ORDER BY count(*) DESC 
```

## Mysql explain 的使用和分析

```
explain 使用
explain 主要提供一个功能，就是对执行的 sql 语句进行分析，可以得到select语句的详细信息，以供DBA或者开发针对性能进行优化。
用法也很简单，就是在执行的语句前面加上 ‘explain’ 就好了。
带条件和不带条件的区别。
数据准备
Explain 标注
id: SELECT 查询的标识符. 每个 SELECT 都会自动分配一个唯一的标识符.
select_type: SELECT 查询的类型.
table: 查询的是哪个表
partitions: 匹配的分区
type: join 类型
possible_keys: 此次查询中可能选用的索引
key: 此次查询中确切使用到的索引.
ref: 哪个字段或常数与 key 一起被使用
rows: 显示此查询一共扫描了多少行. 这个是一个估计值.
filtered: 表示此查询条件所过滤的数据的百分比
extra: 额外的信息
各个主要字段的常用取值和含义
select_type
主要表示查询类型
SIMPLE, 表示此查询不包含 UNION 查询或子查询
PRIMARY, 表示此查询是最外层的查询
UNION, 表示此查询是 UNION 的第二或随后的查询
DEPENDENT UNION, UNION 中的第二个或后面的查询语句, 取决于外面的查询
UNION RESULT, UNION 的结果
SUBQUERY, 子查询中的第一个 SELECT
DEPENDENT SUBQUERY: 子查询中的第一个 SELECT, 取决于外面的查询. 即子查询依赖于外层查询的结果.
通常都是SIMPLE查询，在没有子查询，和 不是UNION 查询的时候，都是SIMPLE 查询。
Table
这个字段主要是可以看查询的类型，从而判断是否高效，通过这里，可以看出事全表查询还是索引扫描查询。
system: 表中只有一条数据. 这个类型是特殊的 const 类型.
const: 针对主键或唯一索引的等值查询扫描,最多只返回一行数据. const 查询速度非常快, 因为它仅仅读取一次即可.
Type
通常来说, 不同的 type 类型的性能关系如下: ALL < index < range ~ index_merge < ref <eq_ref < const < system ALL 类型因为是全表扫描, 因此在相同的查询条件下, 它是速度最慢的.
而 index类型的查询虽然不是全表扫描, 但是它扫描了所有的索引, 因此比 ALL 类型的稍快. 后面的几种类型都是利用了索引来查询数据,
因此可以过滤部分或大部分数据, 因此查询效率就比较高了.
possible_keys
possible_keys 表示 MySQL 在查询时, 能够使用到的索引. 注意, 即使有些索引在 possible_keys 中出现,
但是并不表示此索引会真正地被 MySQL 使用到. MySQL 在查询时具体使用了哪些索引, 由 key 字段决定.
key
此字段是 MySQL 在当前查询时所真正使用到的索引.
key_len
表示查询优化器使用了索引的字节数. 这个字段可以评估组合索引是否完全被使用, 或只有最左部分字段被使用到. key_len 的计算规则如下:
字符串
char(n): n 字节长度
varchar(n): 如果是 utf8 编码, 则是 3 n + 2字节; 如果是 utf8mb4 编码, 则是 4 n + 2 字节.
数值类型:
TINYINT: 1字节
SMALLINT: 2字节
MEDIUMINT: 3字节
INT: 4字节
BIGINT: 8字节
时间类型
DATE: 3字节
TIMESTAMP: 4字节
DATETIME: 8字节
字段属性: NULL 属性 占用一个字节. 如果一个字段是 NOT NULL 的, 则没有此属性.
Row
rows 也是一个重要的字段. MySQL 查询优化器根据统计信息, 估算 SQL 要查找到结果集需要扫描读取的数据行数.
这个值非常直观显示 SQL 的效率好坏, 原则上 rows 越少越好.
Extra
额外的信息会在extra 里面显示出来。
Using filesort 当 Extra 中有 Using filesort 时, 表示 MySQL 需额外的排序操作,
不能通过索引顺序达到排序效果. 一般有 Using filesort, 都建议优化去掉, 因为这样的查询 CPU 资源消耗大.
Using index： "覆盖索引扫描", 表示查询在索引树中就可查找所需数据, 不用扫描表数据文件, 往往说明性能不错
Using temporary： 查询有使用临时表, 一般出现于排序, 分组和多表 join 的情况, 查询效率不高, 建议优化.
```

## 数据性能排查

```
1,查看每个客户端IP过来的连接消耗了多少资源。
mysql> select * from host_summary;

2,查看某个数据文件上发生了多少IO请求。
mysql> select * from io_global_by_file_by_bytes;

3,查看每个用户消耗了多少资源。
mysql> select * from user_summary;

4,查看总共分配了多少内存。
mysql> select * from memory_global_total;

5,数据库连接来自哪里，以及这些连接对数据库的请求情况是怎样的？ 查看当前连接情况。
mysql> select host, current_connections, statements from host_summary;

6,查看当前正在执行的SQL和执行show full processlist的效果相当。
mysql> select conn_id, user, current_statement, last_statement from session;

7,数据库中哪些SQL被频繁执行？ 执行下面命令查询TOP 10最热SQL。
mysql> select db,exec_count,query from statement_analysis order by exec_count desc limit 10;

8,哪个文件产生了最多的IO，读多，还是写的多？
mysql> select * from io_global_by_file_by_bytes limit 10;

9,哪个表上的IO请求最多？
mysql> select * from io_global_by_file_by_bytes where file like ‘%ibd’ order by total desc limit 10;

10,哪个表被访问的最多？ 先访问statement_analysis，根据热门SQL排序找到相应的数据表。 哪些语句延迟比较严重？ 查看statement_analysis中avg_latency的最高的SQL。
mysql> select * from statement_analysis order by avg_latency desc limit 10;

11,或者查看statements_with_runtimes_in_95th_percentile视图。
mysql> select * from statements_with_runtimes_in_95th_percentile;

12,哪些SQL执行了全表扫描或执行了排序操作？ mysql> select * from statements_with_sorting; mysql> select * from statements_with_full_table_scans;

13,哪些SQL语句使用了临时表，又有哪些用到了磁盘临时表？ 查看statement_analysis中哪个SQL的tmp_tables 、tmp_disk_tables值大于0即可。 mysql> select db, query, tmp_tables, tmp_disk_tables from statement_analysis where tmp_tables>0 or tmp_disk_tables >0 order by (tmp_tables+tmp_disk_tables) desc limit 20;

14,也可以查看statements_with_temp_tables视图。
mysql> select * from statements_with_temp_tables\G

15 哪个表占用了最多的buffer pool？
mysql> select * from innodb_buffer_stats_by_table order by allocated desc limit 10;

16,每个库（database）占用多少buffer pool？
mysql> select * from innodb_buffer_stats_by_schema order by allocated desc limit 10;

17,每个连接分配多少内存？ 利用session表和memory_by_thread_by_current_bytes分配表进行关联查询。
mysql> select b.user, current_count_used, current_allocated, current_avg_alloc, current_max_alloc, total_allocated,current_statement from memory_by_thread_by_current_bytes a, session b where a.thread_id = b.thd_id;

18,MySQL自增长字段的最大值和当前已经使用到的值？
mysql> select * from schema_auto_increment_columns;

19,MySQL索引使用情况统计？
mysql> select * from schema_index_statistics;

20,MySQL有哪些冗余索引和无用索引？
mysql> select * from schema_redundant_indexes; mysql> select * from schema_unused_indexes;

21,MySQL内部有多个线程在运行？ MySQL内部的线程类型及数量。
mysql> select user, count(*) from processlist group by user;
```

## mpysql 数据备份

```
#!/bin/bash
bk_dir=/data/mysql_bk
bk_time=$(/bin/date +%Y%m%d)
bk_mysqldump=/usr/local/mysql/bin/mysqldump
db_user=root
db_password=Yy123456
db_name=(`/usr/local/mysql/bin/mysql -uroot -p$db_password -e "show databases" 2> /dev/null`)


#数据备份
for i in ${db_name[@]:2}
do
        #判断目录是否存在
        if [ ! -d "${bk_dir}/$i" ];
        then
                mkdir -p ${bk_dir}/$i
        fi
        #备份所有库
        $bk_mysqldump -u$db_user -p$db_password ${i} > $bk_dir/${i}/${i}-${bk_time}.sql  2> /dev/null

        if [ $? -ne 0 ];
                then
                echo -e "${i}-${bk_time}.sql 备份 OK!!! " >> $bk_dir/mysqldump.log
        else
                echo -e "${i}-${bk_time}.sql 备份 error" >> $bk_dir/mysqldump.log
        fi
        cd $bk_dir/$i
        tar -zcf ${i}-${bk_time}.tar ${i}-${bk_time}.sql
        rm -f ${i}-${bk_time}.sql

        find ${bk_dir}/${i} -name "*.tar" -mtime +30 -exec rm -rf {} \; &>/dev/null
done
```
