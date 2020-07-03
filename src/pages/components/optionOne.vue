<template>
    <div class="content">
        <div> {{msg}}</div>
        <div class="throttle" @click="crazyClick">测试节流</div>
        <input type="text" class="input" @keydown="crazyInput" placeholder="测试防抖">
    </div>
</template>

<script>
    // 防抖: 前面打断，最后一次执行
    const createDebounce = (fn, delay = 1000) => {
        let timer = null
        return function debounce() {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn && fn.apply(this)
            }, delay)
        }
    };

    const createThrottle = (fn, delay = 1000) => {
        let status = 'START'
        return function throttle() {
            if (status == 'WAITING') return
            status = 'WAITING'
            setTimeout(() => {
                fn && fn.apply(this)
                status = 'START'
            }, delay)
        }
    }
    export default {
        data() {
            return {
                msg: '掘金面试题整理'
            }
        },
        methods: {
            javascript() {
                // get post区别？

                /**
                 * get 请求会被浏览器主动缓存，post需要手动设置 headers中设置 Cache-Control：max-age=0  Cache-Control: no-cache不使用缓存
                 * get 请求参数会保存在浏览器历史记录中，post不会
                 * get 参数会通过url传递，post通过request body中传递
                 */

                // 浏览器输入url发生了什么？
                /**
                 * 建立Tcp连接，三次握手（客户端告诉服务端我要链接了，服务端同意一下，客户端回应）
                 * 连接后，浏览器向服务器 发起http请求，服务器处理
                 * 关闭Tcp连接，四次挥手（客户端通知没有数据要传了咱们关闭连接吧，服务端接收后看一下自己是否还有上传的，服务端说没有了关闭吧，客户端说好的）
                 * 断开连接后，浏览器解析资源，将css解析CSSTree，解析html生成DomTree
                 */

                // 闭包？

                /**
                 * 闭包是可以访问函数内部变量的函数
                 * 优点：可以做到让外部访问函数内部的变量，可以避免使用全局变量，防止全局变量污染，局部变量常驻内存中
                 * 缺点：局部变量常驻内存，可能导致内存泄漏
                 */

                // 继承？
                /**
                 * 构造函数继承：father.call(this)  缺点：不能继承父类的原型上的属性和方法
                 * 原型链继承：child.prototype = new Father()  缺点：多个实例引用同一个对象，互相影响
                 * 组合继承：father.call(this) child.prototype = new Fatcher()  缺点：调用了两次父类构造函数
                 * 寄生组合继承：father.call(this)  child.prototype = Object.create(fatcher.prototype) child.portotype.constructor = child
                 * es6 继承 class child extends Father{ constructor( props ){ super(props) } }
                 */

                // 解决异步回调方法？
                /**
                 * promise:
                 * async / await
                 */

                // 前端事件流？
                /**
                 * 事件冒泡阶段：从目标元素一直向上找知道根元素 - 目标阶段 - 事件捕获阶段：一直向下到目标元素后 
                 * 是先捕获后冒泡
                 * addEventListener('事件名', fn, true)  // true 为捕获，false 冒泡
                 * 如何让事件先冒泡后捕获？ 同一事件 监听冒泡和捕获，监听到捕获先暂缓，知道冒泡执行后在执行
                 */

                // 事件委托？
                /**
                 * 不在当前元素添加函数，在它的父元素上添加监听函数，通过事件冒泡 父元素可以监听子元素事件的触发
                 */

                // 图片的预加载和懒加载？
                /**
                 * 预加载：在用户没有访问之前加载图片，用户访问时从本地缓存中渲染
                 * 懒加载：主要服务器前端优化，减少请求数或延迟请求数
                 * 两者区别：行为是相反的，一个提前加载，增加服务器前端压力；一个迟缓加载，缓解服务器前端压力
                 */

                // js的new操作符做了哪些事？
                /**
                 * new操作符首先创建一个空对象，将对先的原型指向构造函数的prototype，执行构造函数后返回对象
                 */

                // call apply bind区别？
                /**
                 * 都是改变this指向，apply的第二个参数是数组，call的第二个参数是一个一个传参的，他们俩会立即执行
                 * 然而bind是返回一个函数，不会立即执行，需要在单独调用
                 */

                // 手撕bind方法？ mounted中

                // promise 和 setTimeout 执行顺序？
                /**
                 * promise的先执行，因为promise、process.nextTick是JavaScript的微观任务，setTimeout是浏览器中的宏观任务
                 */

                // 如何实现sleep延时函数？
                /**
                 * 通过promise setTimeout
                 * 通过async await封装 （ promise setTimeout）
                 */

                // 深拷贝、浅拷贝
                // var obj = {
                //     a: 2,
                //     b: {
                //         name: 'xinglu'
                //     },
                //     say: function (params) {
                //         console.log('happy endding')
                //     }
                // }

                // var obj2 = this.shallowCopy(obj)
                // var obj3 = this.deepCopy(obj)
                // obj.b.name = 'hello world'
                // console.log('obj2::::', obj2)
                // console.log('obj3!!!!', obj3)


                // 什么是防抖和节流？有什么区别？如何实现？
                /**
                 * 防抖：高频触发事件，前面不断打断，n秒后只触发一次
                 * 节流：高频触发事件，n秒内第一次执行，后面的抛弃
                 * 具体看以下函数
                 * 防抖： createDebounce  节流：createThrottle 
                 */

                // 介绍下set weakSet map weakMap 区别？
                /**
                 * Set/WeakSet: 不重复的值的集合  [...new Set(array)] / Array.from(new Set(array)) set去重的两种方法
                 * Map/WeakMap: 键值对的集合
                 * Set/WeakSet 区别：WeakSet成员只能是对象，而不能是其他的类型；WeakSet 中的对象都是弱引用，垃圾回收机制会自动回收该对象所占用的内存；
                 * Map/WeakMap 区别：WeakMap只接受对象作为键名，不接受其他类型的值作为键名；WeakMap的键名弱引用，不计入垃圾回收机制，会自动回收。
                 */

                // ES5/ES6 的继承除了写法以外还有什么区别？
                /**
                 * 实质上的区别：es5是先创建的子类实例对象，然后再将父类的属性方法添加到this上
                 * es6是先创建的父类的this【 先调用的 super()方法 】然后用子类的构造函数修改this
                 */

                // setTimeout、Promise、Async/Await 的区别
                /**
                 * setTimeout是宏任务（浏览器上） promise是微任务，本身是立即执行，then方法是异步执行（JavaScript上的）
                 * async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回
                 */

                //算法编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组 
                /**
                 * 使用迭代的方式实现 flatten 函数。（扁平化）
                 * 以下函数 handleFlatSort
                 */

                // 手写一个new函数 
                /**
                 * 已下 myNew()
                 */

                //简单讲解一下 HTTP2 的多路复用
                /**
                 * 采用了二进制的传输方式
                 * 同域名下所有的通信都在单个连接上完成，消除因为多个Tcp连接而带来的延迟和内存消耗
                 * 单个连接上可以并行的交错请求和相应，互不影响
                 */

                //谈谈你对 TCP 三次握手和四次挥手的理解
                /**
                 * 3次握手：你好我是A，收到我是B，A说那么我们连接了
                 * 4次挥手：A说你好我要关闭了，B说稍等我看看还有没有要传输的，B说可以了随时关闭，A说你关闭吧不用回复
                 */

                // Object.prototype.toString.call() 、 instanceof 以及 Array.isArray() typeof 区别？
                /**
                 * 基本数据类型：Number、String、Boolean、Null、 Undefined、Symbol（ES6）
                 * 引用数据类型：Object（函数 对象 数组 正则 Object、Array、RegExp、Date、Function）
                 * 
                 * 1、每个继承Object对象都有一个toString属性，返回 [Object type] 其中type为对象的类型，这个方法对所有的基本类型都能判断，包括null undefined
                 * 2、instanceof是通过判断对象的原型链中是不是能找到类型的prototype，只能判断对象（引用）类型，判断不了基本类型。
                 * 3、Array.isArray 用来判断对象是否是数组，
                 * 4、typeof只能判断基本类型
                 */

                // 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
                /**
                 * 浏览器渲染机制：浏览器将html解析成dom tree，将css解析成css tree 合并成渲染树 Render tree
                 * 样式发生改变而不会影响布局的，称为重绘（repaint） 类似color、background-color
                 * 布局或者几何属性需要改变就称为回流（reflow） 类似删除元素，修改宽高。回流必定会发生重绘，重绘不一定会引发回流。
                 * 优化：避免频繁操作dom以及样式，减少使用table布局
                 */

                // 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景？
                /**
                 * 作用：都是某个对象(Observe)改变，使依赖于它的多个对象(notify)得到通知。
                 * 发布-订阅模式是借助第三方来实现调度的
                 * 观察者模式中主体和观察者是互相感知的
                 */

                // promise 解决了什么问题？
                /**
                 * 连续执行两个或多个异步操作是常见的需求，再上一个执行完成后，开始下一个操作，并带着上一步的返回结果，
                 * 我们可以通过promise链式调用实现这种需求
                 */

                //说说浏览器和 Node 事件循环的区别
                /**
                 * 异步处理的顺序不同，在node11以下版本(先执行所有的宏任务，再执行微任务)
                 * 在node11及浏览器的执行结果(顺序执行先微任务后宏任务)
                 */

                // 介绍模块化发展历程
                /**
                 * AMD：使用requireJS 来编写模块化 define
                 * CMD：使用seaJS 来编写模块化  define
                 * CommonJS：nodejs 中自带的模块化。 require引入、module.exports和exports导出
                 * webpack：require.ensure代码分割
                 * ES Modules：ES6 引入的模块化，import导入、 export 和 export default导出
                 */

                // 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？
                /**
                 * let const默认会生成块级作用域，只作用在块级作用域里。直接调用变量就可获取
                 */

                // cookie 和 token 都存放在 header 中，为什么不会劫持 token？
                /**
                 * token是为了防止CSRF（跨站请求伪造 ）；  xss（跨站脚本攻击）
                 * CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token
                 */

                // 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
                /**
                 * 已下函数 mergeArr()
                 */

                //改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。 
                for (var i = 0; i < 10; i++) {
                    setTimeout(() => {
                        console.log(i);
                    }, 1000)
                }
                /**
                 * 看已下函数  changeFun
                 */

                // 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
                /**
                 * 首先 vuex是状态管理机制，因为更改state的函数必须是纯函数，
                 * 纯函数既是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的state不可预测；
                 */

                // 下面代码中 a 怎么赋值会打印 1？
                var a = '';
                if (a == 1 && a == 2 && a == 3) {
                    console.log(1);
                }
                /**
                 * let a = [1,2,3] a.toString = a.shift;（原理也是添加 toString）
                 * let a = { i: 1, toString(){ return a.i++ } }
                 * let a = { i: 1, valueOf () { return a.i++ } }
                 */

                // 介绍下 BFC 及其应用
                /**
                 * BFC块级格式上下文
                 * 主要作用：清除浮动、防止同一容器中的相邻元素间垂直方向边距重叠问题
                 * 创建BFC：display不为 none、 overflow 不为 visiable、绝对定位、float浮动
                 */

                // 实现一个 sleep 函数 promise async/await
                /**
                 * 看已下 sleepFun(1000)
                 */

                // 介绍 HTTPS 握手过程
                /**
                 * 客户端使用https的url访问web服务器,要求与服务器建立ssl连接
                 * web服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
                 * 客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
                 * 客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥
                 * 之后服务器与客户端使用秘钥加密传输
                */

                // 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
                /**
                 * 跨域友好
                 * 执行过程无阻塞，不会阻塞页面加载，影响用户的体验
                 * GIF的最低合法体积最小
                 * 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
                */

                // 实现 (5).add(3).minus(2) 功能?
                /**
                 * Number.prototype.add = function (n){
                 * }
                 * Number.prototype.minus = function (n){
                 *  return this.valueOf() - n
                 * }
                */

                // 怎么让一个 div 水平垂直居中
                /**
                 * display:flex 布局
                 * postion 定位布局 结合 margin / transform: translate(-50%, -50%); 
                 * display:grid  布局 justify-self: center; align-self: center;
                */










                // 以下为框架层面面试题
                //写 React / Vue 项目时为什么要在组件中写 key，其作用是什么？
                /**
                 * 用于diff算法比对新旧虚拟dom的时候通过key更快的找到对应的节点（map映射），提高速度，没有key就循环比对消耗资源
                 */

                // 聊聊 Vue 的双向数据绑定（响应式原理）？
                /**
                 * 数据劫持observer 结合 发布订阅模式 watcher dep 的方式来实现
                 * 主要是通过 Object.defineProperty get set方法 
                 */

                // 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
                /**
                 * vue 是单项数据流，便于对数据进行追踪，避免数据混乱。
                 * 只能父组件修改子组件的数据，子组件只能通过event传递给父组件，委托父组件帮它更改，从而保证数据修改源唯一性。
                 */

                // 双向绑定和 vuex 是否冲突
                /**
                 * 严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model会可能出现报错
                 * 在用户输入时，v-model 会试图直接修改 obj.message。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。
                */

                // 为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？
                /**
                 * defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性遍历。
                 * defineProperty不能监测数组下标的变化，导致数组添加元素，不能实时相应
                 * proxy可以劫持整个对象，并返回一个新的对象
                 * proxy有13种劫持操作
                */




            },
            // 浅拷贝
            shallowCopy(obj) {
                let objArr = []
                if (Object.prototype.toString.call(obj) === '[object Object]') {
                    for (let key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            objArr[key] = obj[key];
                        }
                    }
                }
                return objArr
            },
            // 深拷贝
            deepCopy(obj) {
                if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;
                let objArr = Array.isArray(obj) ? [] : {}
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        objArr[key] = Object.prototype.toString.call(obj[key]) === '[object Object]' ? this.deepCopy(
                            obj[key]) : obj[key]
                    }
                }
                return objArr
            },

            crazyClick: createThrottle(function () {
                console.log('执行的函数？')
            }, 5000),

            crazyInput: createDebounce(function () {
                console.log('执行的函数？')
            }, 1000),

            // 扁平化 去重并且排序
            handleFlatSort(data) {
                let newArr = []
                // newArr = [...new Set(data.flat(Infinity))].sort((a, b) => a - b)

                // 冒泡排序
                // for(let i = newArr.length; i>0; i--) {
                //     for(let j=0; j<i; j++) {
                //         if(newArr[j] > newArr[j+1] ) {
                //             [newArr[j], newArr[j+1] ] = [newArr[j+1], newArr[j] ]
                //         }
                //     }
                // }

                // 递归处理扁平
                // let fn = (data) => {
                //     for(let key in data) {
                //         if(Array.isArray(data[key])){
                //             fn(data[key])
                //         }else {
                //             newArr.push(data[key])
                //         }
                //     }
                // }
                // fn(data)

                // reduce扁平化
                // function flatten(){
                //     return data.reduce( (pre, next) =>{
                //        return  pre.concat( Array.isArray(next)? flatten(next): next)
                //     }, [])
                // }

                // 循环 展开操作符扁平化
                // while (data.some(Array.isArray)) {
                //   newArr = [].concat(...data);
                // }

            },
            // 重写new
            myNew(father, ...args) {
                let newObj = Object.create(father.prototype)
                father.apply(newObj, args)
                return newObj
            },
            // 合并数组为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
            mergeArr() {
                const arr = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
                const brr = ['A', 'B', 'C', 'D']
                let crr = brr.map(item => item + 3)
                let drr = arr.concat(crr).sort().map(item => {
                    if (item.includes('3')) {
                        console.log(item.split(''))
                        return item.split('')[0]
                    }
                    return item;
                })

                console.log('drr:::', drr)
            },

            // 改造函数 输出0-9
            changeFun() {
                // 第一种 let 块级作用域
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        // console.log(i);
                    }, 1000)
                }
                // 第二种 闭包
                for (var i = 0; i < 10; i++) {
                    (function (i) {
                        setTimeout(() => {
                            // console.log(i);
                        }, 1000)
                    })(i)
                }
            },

            // 实现延时函数 利用promise async/await
            sleepFun(delay = 1000) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('我是延时函数：：：：：')
                    }, delay)
                })
            },
           
        },
        mounted() {
            // 重写bind函数
            Function.prototype.myBind = function (thisArg) {
                if (typeof this !== 'function') {
                    return;
                }
                var args = Array.prototype.slice.call(arguments, 1)
                const _this = this;
                var bound = function () {
                    args = args.concat(Array.prototype.slice.call(arguments))
                    return _this.apply(obj, args)
                }
                bound.prototype = _this.prototype;
                return bound;
            }

            function foo(name) {
                this.name = name;
            }
            var obj = {}
            var bar = foo.myBind(obj)
            bar('jack')

            //数组扁平化 去重 排序
            var arr = [
                [1, 2, 2],
                [3, 4, 5, 5, [15]],
                [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
            ];
            this.handleFlatSort(arr)

            // new函数重写
            function father(name, age) {
                this.name = name
                this.age = age
            }
            const son = this.myNew(father, 'xinglu', 22)

            // this.sleepFun(2000).then((res) => {
            //     console.log('res:::::', res)
            // })

            // async 实现sleep延时函数
            let sleep = (delay=1000) => new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('我是async延时函数!!')
                }, delay)
            })
            async function sleepAsync(delay) {
                let out = await sleep(delay)
                return out;
            }
            // sleepAsync(3000).then(res=>console.log('res:::::', res))


        }
    }
</script>
<style scoped>
    .throttle {
        width: 100px;
        height: 50px;
        background-color: rgb(236, 63, 63);
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 20px;
        text-align: center;
        line-height: 50px;
    }

    .input {
        margin-top: 20px;
    }
</style>