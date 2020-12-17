<template>
    <el-container>
        <div class="user-box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column
                    prop="id"
                    label="编号">
                </el-table-column>
                <el-table-column
                    prop="head_pic"
                    label="头像">
                    <template slot-scope="scope">
                        <img :src="scope.row.head_pic" class="head_pic"/>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="nickname"
                    label="昵称">
                </el-table-column>
                <el-table-column
                    prop="register_time"
                    label="注册时间">
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <div class="pagination">
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </el-container>
</template>
<script>
export default {
    name: "UserList",
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    head_pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4278307890,4220096963&fm=26&gp=0.jpg",
                    nickname: '王小虎',
                    register_time: '2016-05-02'
                }, {
                     id: 2,
                    head_pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4278307890,4220096963&fm=26&gp=0.jpg",
                    nickname: '王小虎',
                    register_time: '2016-05-02'
                }, {
                    id: 3,
                    head_pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4278307890,4220096963&fm=26&gp=0.jpg",
                    nickname: '王小虎',
                    register_time: '2016-05-02'
                }, {
                    id: 4,
                    head_pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4278307890,4220096963&fm=26&gp=0.jpg",
                    nickname: '王小虎',
                    register_time: '2016-05-02'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .user-box {
        width: 100%;
    }
    .head_pic {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    .pagination {
        padding: 30px 0;
        text-align: center;
    }
</style>