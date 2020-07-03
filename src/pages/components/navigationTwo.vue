<template>
    <div class="content">
        {{msg}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '页面内容 算法(冒泡排序, 快速排序, 选择排序)',
            }
        },
        methods: {
            sort(mockData, judge) {
                // 冒泡排序: 循环,相邻两两比较,不满足条件调换位置,知道最后
                for (let i = mockData.length; i > 0; i--) {
                    for (let j = 0; j < i; j++) {
                        if (judge(mockData[j], mockData[j + 1])) {
                            [mockData[j], mockData[j + 1]] = [mockData[j + 1], mockData[j]]
                        }
                    }
                }
                return mockData
            },

            selectSort(mockData) {
                // 选择排序: 循环,每次找到最大的放在新的数组中,一直到最后
                const newArray = []
                for (let i = 0, len = mockData.length; i < len; i++) {
                    let minValue = -Infinity, minIndex = ''
                    for (let j = 0, len = mockData.length; j < len; j++) {
                        if (mockData[j] > minValue) {
                            minValue = mockData[j]
                            minIndex = j
                        }
                    }
                    newArray.push(minValue)
                    mockData[minIndex] = -Infinity
                }
                return newArray
            },

            quickSort(mockData) {
                // 快速排序: 找到基准,一般为中间数据,比他小放在左侧数组,反之放右侧数组,递归调用直至最后拼接
                // 注意: 递归,先写结束逻辑,再写内容逻辑
                if(mockData.length <= 1) {
                    return mockData
                }
                let pointIndex = Math.floor( ( mockData.length - 1)/2)
                let pointValue = mockData[pointIndex], leftArr = [], rightArr = []
                // 将本身刨除在外
                mockData.splice(pointIndex, 1)

                mockData.forEach( val=>{
                    val < pointValue? leftArr.push(val): rightArr.push(val)
                })
               
                return (this.quickSort(leftArr)).concat([pointValue], this.quickSort(rightArr))

            },
        },
        mounted() {

            const res = this.sort([15, 43, 52, 6, 76, 8, 4, 34, 35], (pre, next) => { return pre > next })
            console.log('冒泡排序::::', res)

            const selectRes = this.selectSort([15, 43, 52, 6, 76, 8, 4, 34, 35])
            console.log('选择排序::::', selectRes)

            const quickRes = this.quickSort( [15, 43, 52, 6, 76, 8, 4, 34, 35] )
            console.log('快速排序::::', quickRes)

        }
    }
</script>
<style scoped>
    .content {}
</style>