<template>
  <div class="content">
    <div v-for="(menuItem, index) in navMenus" :key="menuItem.code">
      <!-- 不存在子元素 -->
      <el-menu-item :index="menuItem.code" v-if="menuItem.children && menuItem.children.length === 0">
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span>{{menuItem.title}}</span>
        </template>
      </el-menu-item>

      <!-- 存在子元素 -->
      <el-submenu :index="menuItem.code" v-if="menuItem.children && menuItem.children.length > 0">
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span>{{menuItem.title}}</span>
        </template>
        <NavMenu :navMenus="menuItem.children"></NavMenu>
      </el-submenu>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ["navMenus"],
    data() {
      return {}
    },
    watch: {},
    computed: {},
    methods: {},
    mounted() {
    }
  }
</script>
<style scoped>
  .content {
    overflow: hidden;
  }
</style>