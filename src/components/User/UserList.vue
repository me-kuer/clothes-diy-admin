<template>
    <el-container>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="id"
                label="编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="nickname"
                label="昵称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="register_time"
                label="注册时间">
            </el-table-column>
        </el-table>
    </el-container>
</template>
<script>
export default {
    name: "UserList",
    data() {
        return {
            tableData: [
                {
                    register_time: '2016-05-02',
                    nickname: '王小虎',
                    id: '上海市普陀区金沙江路 1518 弄'
                }, {
                    register_time: '2016-05-02',
                    nickname: '王小虎',
                    id: '上海市普陀区金沙江路 1518 弄'
                }, {
                    register_time: '2016-05-02',
                    nickname: '王小虎',
                    id: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>