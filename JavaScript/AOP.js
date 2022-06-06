function say(who) {
    console.log(who + 'hello ')
}

Function.prototype.before = function(beforeFun) {
    return (...args) => { // 剩余运算符
        beforeFun()
        this(...args) // 展开运算符
    }
}
let newFu = say.before(function() {
    console.log('说话前')
})

newFu('我')


//  基础补充 什么叫闭包？
/**
 * 作用域：函数定义的位置
 * 执行上下文：函数执行 产生执行上下文
 * 闭包： 这个函数不在当前作用域下执行，在外面执行并且可以访问作用域下的变量
 */