<template>
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
                <el-menu-item index="/goods/add">发布商品</el-menu-item>
                <el-menu-item index="/goods/list">商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-goods"></i>
                    图案管理
                </template>
                <el-menu-item index="/picture/add">添加图案</el-menu-item>
                <el-menu-item index="/picture/list">图案列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    订单管理
                </template>
                <el-menu-item index="/order/list">订单列表</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<style lang="scss" scoped>
    .menu {
        width: 200px !important;

        .menu-list {
            height: 100%;
        }
    }
</style>
<script>
export default {
    name: "Nav"
}
</script>