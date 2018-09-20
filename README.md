## 整个流程 ##

![图侵，删](https://github.com/qingzhu1224/learn-redux/blob/master/react.jpg)

#### redux流程 ####

- action creator => action => store.dispatch(action) => reducer(preState, action) => newState


#### redux API #### 
[参考](https://github.com/kenberkeley/redux-simple-tutorial/blob/master/redux-advanced-tutorial.md)

- createStore()

    - dispatch(action)

    - getState()


- bindActionCreator

- combineReducers


### react-redux ###

>1.[参考](https://juejin.im/post/59cb5eba5188257e84671aca)



### 函数编程  ###

>1.函数编程 [参考](http://taobaofed.org/blog/2017/03/16/javascript-functional-programing/)

- 函数编程是以函数作为主要载体的编程方式。优点：语义更加清晰\可复用性更高\可维护性更好\作用域局限，副作用少

- 常见的函数式编程模型包括：闭包、高阶函数、map(映射)、柯里化(currying)、组合(Composing)等

>2.纯函数 [参考](https://zcfy.cc/article/master-the-javascript-interview-what-is-a-pure-function-2186.html)

- 相同输入总是会返回相同的输出。

- 不产生副作用。

- 不依赖于外部状态。

>3.compose(实现)

>4.middleware(中间件)

>5.柯里化 [参考](https://segmentfault.com/a/1190000008193605)

- 柯里化又称部分求值，柯里化函数会接受一些参数，然后不会立即求值，而是继续返回一个新函数，将传入的参数通过闭包的形式保存，等到真正求值的时候，再一次性把所有传入的参数进行求值。

- 给定一个函数的部分参数，生成一个接受其他参数的新函数

>6.高阶函数 [参考](https://juejin.im/post/5ad6b34a6fb9a028cc61bfb3)

- 高阶函数是指至少满足下列条件之一的函数：

  - 函数可以作为参数被传递

  - 函数可以作为返回值输出

- 应用

  - ajax异步请求

  - 判断类型

