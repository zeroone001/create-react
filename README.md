This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 虚拟DOM
* state 数据
* JSX 模版
* 数据 + 模版 结合， 生成真实的DOM， 显示
* state 发生改变，
* 数据 + 模版 结合， 生成真实DOM， 并不直接替换原始的DOM
* 新的DOM和原始的DOM 做比对，找差异
* 找出变化
* 只用新的DOM中的元素，替换老的DOM中的元素

#### new
* state 数据
* JSX 模版
* 数据 + 模版 结合， 生成真实的DOM， 显示
*
* 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实的DOM）
* ['div', {id: 'a'}, []]
* state发生变化
* 生成新的虚拟DOM
* 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别中的内容

#### react
* 先生成虚拟DOM， 再生成真实的DOM
*

