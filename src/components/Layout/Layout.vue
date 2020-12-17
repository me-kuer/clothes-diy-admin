<template>
    <el-container class="container">
        <!-- header组件 -->
        <header-component></header-component>
        <el-container>
            <!-- nav组件 -->
            <nav-component></nav-component>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
// 引入 nav组件 与 header组件
import navComponent from "@/components/Layout/Nav"
import headerComponent from "@/components/Layout/Header"

export default {
    name: "Layout",
    data() {
        return {
            
        }
    },
    components: {
        navComponent,
        headerComponent
    }
}
</script>
<style lang="scss" scoped>
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        flex-direction: column;
    }
</style>