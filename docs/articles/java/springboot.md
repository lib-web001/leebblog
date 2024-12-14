---
tag:
  - java
---

## SpringBoot 常用注解

### 一、注解(annotations)列表

```java
@SpringBootApplication：
包含了@ComponentScan、@Configuration 和@EnableAutoConfiguration 注解。其中
@ComponentScan 让 Spring Boot 扫描到 Configuration 类并把它加入到程序上下文。

@Configuration 等同于 Spring 的 XML 配置文件；使用 Java 代码可以检查类型安全。
@EnableAutoConfiguration 自动配置。

@ComponentScan 组件扫描，可自动发现和装配一些 Bean。

@Component 可配合 CommandLineRunner 使用，在程序启动后执行一些基础任务。

@RestController 注解是@Controller 和@ResponseBody 的合集,表示这是个控制器 bean,并且是将函数的返回值直接填入 HTTP 响应体中,是 REST 风格的控制器。

@Autowired 自动导入。

@PathVariable 获取参数。

@JsonBackReference 解决嵌套外链问题。

@RepositoryRestResourcepublic 配合 spring-boot-starter-data-rest 使用。
```

### 二、注解(annotations)详解

```java
@SpringBootApplication：声明让 Spring Boot 自动给程序进行必要的配置，这个配置等同于：@Configuration ，@EnableAutoConfiguration 和 @ComponentScan 三个配置。
@ResponseBody：表示该方法的返回结果直接写入 HTTP response body 中，一般在异步获取数据时使用，用于构建 RESTful 的 api。在使用@RequestMapping 后，返回值通常解析为跳转路径，加上@ResponseBody 后返回结果不会被解析为跳转路径，而是直接写入 HTTP response body 中。比如异步获取 json 数据，加上@ResponseBody 后，会直接返回 json 数据。该注解一般会配合@RequestMapping 一起使用。示例代码：
@Controller：用于定义控制器类，在 Spring 项目中由控制器负责将用户发来的 URL 请求转发到对应的服务接口（service 层），一般这个注解在类中，通常方法需要配合注解@RequestMapping。示例代码：
@RestController：用于标注控制层组件(如 struts 中的 action)，@ResponseBody 和@Controller 的结合。示例代码：
```

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demoInfo2")
publicclass DemoController2 {
  @RequestMapping("/test")
  public String test(){
    return "ok";
  }
}
```

```java

@RequestMapping：提供路由信息，负责 URL 到 Controller 中的具体函数的映射。

@EnableAutoConfiguration：Spring Boot 自动配置（auto-configuration）：尝试根据添加的 jar 依赖自动配置 Spring 应用。例如，如果 classpath 下存在 HSQLDB，并且没有手动配置任何数据库连接 beans，那么将自动配置一个内存型（in-memory）数据库”。可以将

@EnableAutoConfiguration 或者@SpringBootApplication 注解添加到一个@Configuration 类上来选择自动配置。如果发现应用了不想要的特定自动配置类，可以使用

@EnableAutoConfiguration 注解的排除属性来禁用它们。

@ComponentScan：表示将该类自动发现扫描组件。个人理解相当于，如果扫描到有@Component、
@Controller、@Service 等这些注解的类，并注册为 Bean，可以自动收集所有的 Spring 组件，包括@Configuration 类。经常使用@ComponentScan 注解搜索 beans，并结合@Autowired 注解导入。可以自动收集所有的 Spring 组件，包括@Configuration 类。
经常使用@ComponentScan 注解搜索 beans，并结合@Autowired 注解导入。如果没有配置的话，Spring Boot 会扫描启动类所在包下以及子包下的使用了@Service，@Repository 等注解的类。

@Configuration：相当于传统的 xml 配置文件，如果有些第三方库需要用到 xml 文件，建议仍然通过@Configuration 类作为项目的配置主类——可以使用@ImportResource 注解加载 xml 配置文件。

@Import：用来导入其他配置类。

@ImportResource：用来加载 xml 配置文件。

@Autowired：自动导入依赖的 bean

@Service：一般用于修饰 service 层的组件

@Repository：使用@Repository 注解可以确保 DAO 或者 repositories 提供异常转译，这个注解修饰的 DAO 或者 repositories 类会被 ComponetScan 发现并配置，同时也不需要为它们提供 XML 配置项。

@Bean：用@Bean 标注方法等价于 XML 中配置的 bean。

@Value：注入 Spring boot application.properties 配置的属性的值。示例代码：
```

```java
@Value(value = “${message}”)
private String message;
@Inject：等价于默认的@Autowired，只是没有 required 属性；
@Component：泛指组件，当组件不好归类的时候，可以使用这个注解进行标注。
@Bean:相当于 XML 中的,放在方法的上面，而不是类，意思是产生一个 bean,并交给 Spring 管理。
@AutoWired：自动导入依赖的 bean。byType 方式。把配置好的 Bean 拿来用，完成属性、方法的组装，它可以对类成员变量、方法及构造函数进行标注，完成自动装配的工作。当加上（required=false）时，就算找不到 bean 也不报错。
@Qualifier：当有多个同一类型的 Bean 时，可以用@Qualifier("name")来指定。与@Autowired 配合使用。@Qualifier 限定描述符除了能根据名字进行注入，但能进行更细粒度的控制如何选择候选者，具体使用方式如下：
```

## Spring Boot 中 6 种 注入 Bean 的方式

```java
谈到Spring的时候一定会提到IOC容器、DI依赖注入，Spring通过将一个个类标注为Bean的方法注入到IOC容器中，达到了控制反转的效果。那么刚开始接触Bean的时候，一定是使用xml文件，一个一个的注入，就例如下面这样。
<bean id="bean" class="beandemo.Bean" />
项目一般很大的话，就需要成千上百个Bean去使用，这样写起来就很繁琐。那么Spring实现了一种通过注解来实现注入的方法。只需要在你需要注入的类前面加上相应的注解，Spring就会扫描到他们去实现注入。
xml扫描包的方式
<context:component-scan base-package="com.company.beandemo"/>
通过注解注入的一般形式
一般情况下，注入Bean有一个最直白，最易懂的方式去实现注入，下面废话先不多说，先贴代码。

● Bean类
public class MyBean{
}
● Configuration类
//创建一个class配置文件
@Configuration
public class MyConfiguration{
    //将一个Bean交由Spring进行管理
    @Bean
    public MyBean myBean(){
        return new MyBean();
    }
}
● Test类
与xml有一点不同，这里在Test中，实例化的不再是ClassPathXmlApplicationContext，而是获取的AnnotationConfigApplicationContext实例。
ApplicationContext context = new AnnotationConfigApplicationContext(MyConfiguration.class);
MyBean myBean = cotext.getBean("myBean",MyBean.class);
System.out.println("myBean = " + myBean);

上面的代码中MyBean也就是需要Spring去管理的一个Bean，他只是一个简单的类。而MyConfiguration中，首先用@Configuration注解去标记了该类，这样标明该类是一个Spring的一个配置类，在加载配置的时候会去加载他。
在MyConfiguration中可以看到有一个方法返回的是一个MyBean的实例，并且该方法上标注着@Bean的注解，标明这是一个注入Bean的方法，会将下面的返回的Bean注入IOC。
通过构造方法注入Bean
在生成一个Bean实例的时候，可以使用Bean的构造方法将Bean实现注入。直接看代码

● Bean类
@Component
public class MyBeanConstructor {

    private AnotherBean anotherBeanConstructor;

    @Autowired
    public MyBeanConstructor(AnotherBean anotherBeanConstructor){
        this.anotherBeanConstructor = anotherBeanConstructor;
    }

    @Override
    public String toString() {
        return "MyBean{" +
            "anotherBeanConstructor=" + anotherBeanConstructor +
            '}';
    }
}
● AnotherBean类
@Component(value="Bean的id，默认为类名小驼峰")
public class AnotherBean {
}
● Configuration类
@Configuration
@ComponentScan("com.company.annotationbean")
public class MyConfiguration{
}

这里可以发现，和一般方式注入的代码不一样了，来看看新的注解都是什么意思：
● @AutoWired
简单粗暴，直接翻译过来的意思就是自动装配，还不理解为什么叫自动装配？看了下一个注解的解释你就知道了。若是在这里注入的时候指定一个Bean的id就要使用@Qualifier注解
● @Component（默认单例模式）
翻译过来是零件，感觉像是修汽车？是的，Spring管理Bean的方法就是修汽车的方式。在需要将一个类变成一个Bean被Spring可以注入的时候加上注解零件@Conmonent，那么就可以在加载Bean的时候把他像零件一样装配到这个IOC汽车上了
在这里还有几个其他的注解也可以实现这个功能，也就是细化的@Component：
● @Controller 标注在Controller层
● @Service 标注在Service层
● @Repository 标注在dao层
● @ComponentScan("")
还是翻译，零件扫描，去看看括号里的“零件仓库”里面，哪些“零件”（类）需要被装载，Spring就会去扫描这个包，将里面所有标注了@Component的类进行注入。
这里的通过构造方法进行注入就很好理解了，在装配MyBean这个零件的时候，突然发现他必须在AnotherBean的基础上才能安装到IOC里面，那么就在每次装配MyBean的时候自动装配一个AnotherBean进去。举个例子吧：
还是以汽车为例，在踩油门出发之前，是不是必须发车？？这里的AutoWired的内容就像发车，不发车，这个油门你踩断都没有用，他都不会走。
通过set方法注入Bean
可以在一个属性的set方法中去将Bean实现注入，看代码吧

● MyBean类
@Component
public class MyBeanSet {

    private AnotherBean anotherBeanSet;

    @Autowired
    public void setAnotherBeanSet(AnotherBean anotherBeanSet) {
        this.anotherBeanSet = anotherBeanSet;
    }

    @Override
    public String toString() {
        return "MyBeanSet{" +
            "anotherBeanSet=" + anotherBeanSet +
            '}';
    }
}
● Configuration类 和 Test类
同上一个，就不贴了

这里可以发现在setter方法上有一个@AutoWired，与上面不同的是，不会在实例化该类时就自动装配这个对象，而是在显式调用setter的时候去装配。
通过属性去注入Bean
前面两种注入的方式诸如时间不同，并且代码较多，若是通过属性，即就是
@Component
public class MyBeanProperty {

    @Autowired
    private AnotherBean anotherBeanProperty;

    @Override
    public String toString() {
        return "MyBeanProperty{" +
            "anotherBeanProperty=" + anotherBeanProperty +
            '}';
    }
}
这里可以看到这个类中需要使用AnotherBean这个实例对象，可以通过@AutoWired去自动装配它。
对于有些小伙伴问私有属性，Spring怎么去加载它到IOC的？那就是反射。
通过List注入Bean
● MyBeanList类
@Component
public class MyBeanList {

    private List<String> stringList;

    @Autowired
    public void setStringList(List<String> stringList) {
        this.stringList = stringList;
    }

    public List<String> getStringList() {
        return stringList;
    }
}
● MyConfiguration类
@Configuration
@ComponentScan("annoBean.annotationbean")
public class MyConfiguration {

    @Bean
    public List<String> stringList(){
        List<String> stringList = new ArrayList<String>();
        stringList.add("List-1");
        stringList.add("List-2");
        return stringList;
    }
}
这里将MyBeanList进行了注入，对List中的元素会逐一注入。下面介绍另一种方式注入List
● MyConfiguration类
@Bean
//通过该注解设定Bean注入的优先级，不一定连续数字
@Order(34)
public String string1(){
    return "String-1";
}

@Bean
@Order(14)
public String string2(){
    return "String-2";
}
注入与List中泛型一样的类型，会自动去匹配类型，及时这里没有任何List的感觉，只是String的类型，但他会去通过List的Bean的方式去注入。
第二种方式的优先级高于第一种，当两个都存在的时候，若要强制去使用第一种方式，则要去指定Bean的id即可
通过Map去注入Bean
@Component
public class MyBeanMap {

    private Map<String,Integer> integerMap;

    public Map<String, Integer> getIntegerMap() {
        return integerMap;
    }

    @Autowired
    public void setIntegerMap(Map<String, Integer> integerMap) {
        this.integerMap = integerMap;
    }
}

@Bean
public Map<String,Integer> integerMap(){
    Map<String,Integer> integerMap = new HashMap<String, Integer>();
    integerMap.put("map-1",1);
    integerMap.put("map-2",2);
    return integerMap;
}

@Bean
public Integer integer1(){
    return 1;
}

@Bean
public Integer integer2(){
    return 2;
}
同样这里也具有两种方式去注入Map类型Bean，且第二种的优先值高于第一种
以上就是Bean通过注解注入的几种方式，可以对比着xml注入的方式去看。
```
