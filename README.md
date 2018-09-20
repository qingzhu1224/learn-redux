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

>1.函数编程

>2.纯函数 [参考](https://zcfy.cc/article/master-the-javascript-interview-what-is-a-pure-function-2186.html)

- 相同输入总是会返回相同的输出。

- 不产生副作用。

- 不依赖于外部状态。

>3.compose(实现)

>4.middleware(中间件)

>5.柯里化 [参考](https://segmentfault.com/a/1190000008193605)

- 柯里化又称部分求值，柯里化函数会接受一些参数，然后不会立即求值，而是继续返回一个新函数，将传入的参数通过闭包的形式保存，等到真正求值的时候，再一次性把所有传入的参数进行求值。

>6.高阶函数 [参考](https://juejin.im/post/5ad6b34a6fb9a028cc61bfb3)

- 高阶函数是指至少满足下列条件之一的函数：

  - 函数可以作为参数被传递

  - 函数可以作为返回值输出

- 应用

  - ajax异步请求

  - 判断类型

