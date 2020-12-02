<template>
    <el-container class="container">
        <el-header class="header">Header</el-header>
        <el-container>
            <el-aside class="menu">
                <el-menu class="menu-list" :router="true">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-custom"></i>
                            用户管理
                        </template>
                        <el-menu-item index="/user/list">
                            用户列表
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-goods"></i>
                            商品管理
                        </template>
                        <el-menu-item index="2-1">发布商品</el-menu-item>
                        <el-menu-item index="2-2">商品列表</el-menu-item>
                        <el-menu-item index="2-3">添加图案</el-menu-item>
                        <el-menu-item index="2-4">图案管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-order"></i>
                            订单管理
                        </template>
                        <el-menu-item index="3-1">订单列表</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name: "Layout",
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .header {
        border-bottom: 1px solid #e6e6e6;
    }
    .menu {
        width: 200px !important;

        .menu-list {
            height: 100%;
        }
    }
</style>