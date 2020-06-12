<template>
  <div class="loginImg">
    <div class="leftMenu">
      <!-- 左侧导航 -->
      <div class="header">
        <img src="https://siimg-opengas.ecej.com/opengas/c/a9d5e9e6ee91836722eeb99a498c78d8.jpg" alt="头像">
        <div class="header-title">E城E家科技有限公司</div>
      </div>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" @select="selectMenuItem">
        <NavMenu :navMenus="navMenus"></NavMenu>
      </el-menu>
    </div>
    <div class="rightNav">
      <!-- 上方导航 -->
      <div class="topNav">
        <div class="userOut">
          <div class="userName">
            <span class="tel">15401071106 企业一般用户</span>
            <span class="out" @click="userOut">
              <i class="el-icon-switch-button"></i>
              退出
            </span>
          </div>
        </div>
        <div class="navTabs" ref='navTabs'>
          <div class="tabsBox">
            <div class=" singleTab" v-for="(navTab, index) in navTabs" :class="{ selectTab: navTab.isSelectTab }"
              @click="handelTab(navTab, index)">
              {{navTab.title}}
              <i class="el-icon-close" @click.stop="delTab(navTab, index)"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
  import NavMenu from "./nav-menu.vue";

  export default {
    components: {
      NavMenu
    },
    data() {
      return {
        message: '我是框架页面',
        activeMenu: '1-1', // 当前激活的菜单
        navMenus: [{
          title: '导航一',
          icon: 'el-icon-location',
          JumpUrl: '',
          code: '1',
          children: [{
            title: '选项1',
            code: '1-1',
            children: [],
            JumpUrl: '/frame/optionOne',
          }, {
            title: '选项3',
            code: '1-2',
            children: [],
            JumpUrl: '/frame/optionTwo',
          }, {
            title: '选项5',
            code: '1-3',
            JumpUrl: '',
            children: [{
              title: '内层5-1',
              code: '1-3-1',
              children: [{
                title: '内内层3-1',
                code: '1-3-1-1',
                children: [],
                JumpUrl: '/frame/optionTwo',
              }, {
                title: '内内层3-2',
                code: '1-3-2-1',
                children: [],
                JumpUrl: '/frame/hello',
              }],
              JumpUrl: '',
            }, {
              title: '内层5-2',
              code: '1-3-2',
              children: [],
              JumpUrl: '/frame/navigationOne',
            }]
          }]
        }, {
          title: '导航二',
          icon: 'el-icon-menu',
          code: '2',
          children: [],
          JumpUrl: '/frame/hello',
        }, {
          title: '导航三',
          icon: 'el-icon-document',
          code: '3',
          children: [],
          JumpUrl: '/frame/navigationTwo',
        }, {
          title: '导航四',
          icon: 'el-icon-setting',
          code: '4',
          children: [],
          JumpUrl: '/frame/navigationOne',
        }],
        navTabs: [{
          title: '选项1',
          name: '1-1',
          content: 'New Tab content',
          isSelectTab: true
        }]
      }
    },
    watch: {
      navTabs(newVal, oldVal) {
        // console.log(this.$refs.navTabs.scrollLeft)
      }
    },
    mounted() {

    },
    methods: {
      // 左侧导航切换
      selectMenuItem(key, keyPath) {
        const that = this

        function jumpFun(navMenus) {
          navMenus.filter(menu => {
            if (menu.code === key && menu.JumpUrl !== '') {
              that.navTabs.forEach(element => {
                element.isSelectTab = false
              });
              // 检验当前是否存在
              let navIndex = ''
              let res = that.navTabs.find((ele, index) => {
                navIndex = index
                return ele.name == menu.code
              })
              if (!res) {
                that.navTabs.push({
                  title: menu.title,
                  name: menu.code,
                  content: menu.title,
                  isSelectTab: true
                })
              } else {
                that.navTabs[navIndex].isSelectTab = true
              }
              that.jumpUrl(menu)
            }
            if (menu.children.length > 0) {
              jumpFun(menu.children)
            }
          })
        }

        jumpFun(this.navMenus)
      },
      // 上方导航切换
      handelTab(val, index) {
        this.navTabs.forEach(element => {
          element.isSelectTab = false
        });
        this.navTabs[index].isSelectTab = true
        this.activeMenu = this.navTabs[index].name;
        this.selectMenuItem(this.navTabs[index].name, '')
      },
      // 导航路由跳转
      jumpUrl(menu) {
        this.$router.push({
          path: menu.JumpUrl
        })
      },
      // 删除上方标签
      delTab(val, index) {
        if (index == 0 && !this.navTabs[index + 1]) {
          this.$message({
            message: '已经剩最后一项了！你是删除不了滴 吼吼~~',
            type: "warning"
          });
          return;
        }
        if ((index - 1) !== -1 && !!this.navTabs[index].isSelectTab && index !== 0) {
          this.navTabs[index].isSelectTab = false
          this.navTabs[index - 1].isSelectTab = true
          this.selectMenuItem(this.navTabs[index - 1].name)
          this.activeMenu = this.navTabs[index - 1].name;
        }
        if (index == 0 && !!this.navTabs[index].isSelectTab && this.navTabs[index + 1]) {
          this.navTabs[index].isSelectTab = false
          this.navTabs[index + 1].isSelectTab = true
          this.selectMenuItem(this.navTabs[index + 1].name)
          this.activeMenu = this.navTabs[index + 1].name;
        }

        this.navTabs.splice(index, 1)
      },
      //  退出
      userOut() {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style scoped>
  .loginImg {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .leftMenu {
    width: 18%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
  }

  .leftMenu .el-menu {
    overflow-y: scroll;
  }

  .el-menu::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px;
  }

  .el-menu::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    background: rgba(84, 92, 100, 0.5);
  }

  .el-menu::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 0;
    background: rgb(241, 236, 236, 0.5)
  }

  .leftMenu .header {
    width: 100%;
    height: 80px;
  }

  .header {
    display: flex;
    align-items: center;
    background-color: rgb(64, 74, 80);
    color: #fff;
  }

  .header img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin: 0 20px;
  }

  .header .header-title {
    font-size: 14px;
  }

  .el-menu-vertical-demo {
    width: 100%;
    height: 100%;
  }

  .rightNav {
    width: 82%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .rightNav .content {
    /* width: 100%; */
    height: 100%;
    padding: 15px;
    background-color: rgb(241, 236, 236);
  }

  .rightNav .topNav {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .topNav .userOut {
    height: 80px;
    width: 100%;
    font-size: 14px;
  }

  .userName {
    line-height: 80px;
    font-size: 14px;
    color: #34495e;
    display: flex;
    justify-content: flex-end;
    color: #99a3ae;
  }

  .userName .out {
    margin: 0 50px;
  }

  .out .el-icon-switch-button {
    font-size: 14px;
    font-style: normal;
    color: #99a3ae;
  }

  .navTabs {
    width: 100%;
    margin-bottom: 1px;
    overflow: hidden;
  }

  .tabsBox {
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
  }

  .tabsBox::-webkit-scrollbar {
    /*滚动条整体样式*/
    height: 7px;
  }

  .tabsBox::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    background: rgba(84, 92, 100, 0.5);
  }

  .tabsBox::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 0;
    background: rgb(241, 236, 236, 0.5)
  }

  .singleTab {
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #e4e7ed;
    border-radius: 6px;
    /* border-left: 0; */
    cursor: pointer;
    font-size: 14px;
    color: rgb(131, 126, 126);
    margin-left: 5px;
  }

  .singleTab>i {
    margin-left: 3px;
  }

  .tabsBox .selectTab {
    color: #409eff;
    border-bottom: 0;
  }
</style>