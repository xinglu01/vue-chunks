<template>
    <div class="content">
        {{ msg }} {{text}}
    </div>
</template>

<script>
    /**
     * @file  订阅器
     * @author xinglu
     */
    import Observe from '@/pages/utils/observe.js'
    export default {
        data() {
            return {
                msg: '页面内容 观察者模式 [发布订阅模式]',
                text: '单例模式，永远返回一个实例'
            }
        },
        methods: {
            show(observe){
                const sendLog = (params) => {
                    console.log('观察展示：：：', params)
                }
                observe.addSub('add', params => {
                    sendLog({
                        ...params
                    })
                },{
                    // once: true
                })
            },
            registerLog(observe) {
                const sendLog = (params) => {
                    console.log('我是log！！！', params)
                }

                observe.addSub(['add', 'refresh'], params => {
                    sendLog({
                        ...params
                    })
                })
            },

            addClick(observe) {
                observe.notify('*', {
                    num: '我全部通知啦哈？？'
                })
            }
        },

        mounted() {
            let observe = new Observe()
            // 监听必须在上面，通知在下方
            
            this.registerLog(observe)
            this.show(observe)
            
            // 用户狂点击
            this.addClick(observe)
        }
    }
</script>
<style scoped>

</style>