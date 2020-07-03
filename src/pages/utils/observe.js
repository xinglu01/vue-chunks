//  封装一个二维数组，[ [add], [prefer]]

class Queuepool {
    constructor() {
        this.pool = []
    }
    
    // 处理数据
    get(namespace) {
        if(namespace === '*') {
            return this.pool
        }
        if( !this.pool[namespace] ) {
            this.pool[namespace] = []
        } 
        return this.pool[namespace]
    }

    pushTo(namespace, item) {
        this.get(namespace).push(item)
    }

    // 判断是否存在
    has(namespace) {
        return !!this.pool[namespace]
    }

    // 删除数据
    del(namespace, item) {
        if(!item) {
            this.pool[namespace] = []
        } else {
            this.pool[namespace] =  this.pool[namespace].filter( val => item !== val )
        }
    }
}


module.exports =  class Observe {
    constructor() {
        // 一对多关系，很多订阅者订阅我，将它记录下
        this.handlers = new Queuepool()
        this.messages = new Queuepool()
    }

    notify(namespace, message, options = {}) {
        // 将消息存在一个队列中
        this.messages.pushTo(namespace, message)
        // 通知
        this.handlers.get(namespace).forEach( handler => {
            handler && handler(message)
        });
        // 当输入* 全部通知订阅者
        if( namespace === '*') {
            let array = this.handlers.get(namespace)
            for(let key in array){
                array[key].forEach( handleItem =>{
                    handleItem && handleItem(message)
                })
            }
        }
        
        return this
    }

    addSub(namespace, subHandler, options = {}) {
        // 监听事件 查看是否是监听多个事件
        if( Array.isArray(namespace) ) {
            namespace.forEach( nameItem => {
                this.addSub(nameItem, subHandler, options) 
            })
            return this
        }
        this.handlers.pushTo(namespace, this.handlerProxy( namespace, subHandler, options.once ))

        // 获取老的消息
        if( options.oldNew && this.messages.has(namespace)){
            const message = this.messages.get(namespace)
            subHandler && this.handlerProxy( namespace, subHandler, options.once )(message)
        }
        return this
    }

    removeSub(namespace, handler) {
        // 删除监听
        this.handlers.del(namespace, handler)
        return this
    }

    handlerProxy(namespace, handler, once) {
        let proxyHandler = message => {
            if( once ) {
                this.removeSub(namespace, proxyHandler)
            }
            return handler.call(this, message)
        }

        return proxyHandler
    }
}
