## case7(Readonly)
### 
1. ts类型系统允许在一个接口里使用 readonly来标记属性，也可以在interface和type里使用readonly。也能指定一个类的属性为只读，然后再声明时或者构造函数中初始化他们。

### 
2. Readonly 的映射类型，它接收一个泛型T，用来把它的所有属性标记为只读类型



## case11（Tuple to Object）
[infer P, ... infer _]中infer P获取的是第一个元素的类型，而...infer _获取的是数组其他剩余元素的数组类型;
特别说明下，我们例子汇总不需要使用其他元素的类型，所以用_。

推断数组(或者元组)第一个元素的类型:
type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _] ? P : never

推断数组(或者元组)最后一个元素的类型
type InferLast<T extends unknown[]> = T extends [... infer _, infer Last] ? Last : never;

## 获取元组的长度
type Length<T extends readonly unknown[]> = T['length']

## 两个数据交集  43 exclude

type MyExclude<T, U> =T extends U?never:T
extends关键字这里对T、U进行分布式遍历，所以T满足U的话就返回never否则就返回T