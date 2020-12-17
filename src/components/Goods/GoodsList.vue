<template>
    <el-container>
        <div class="goods-box">
            <el-table
                :data="tableData">
                <el-table-column
                    prop="id"
                    label="编号">
                </el-table-column>
                <el-table-column
                    label="封面">
                    <template slot-scope="scope">
                        <img :src="scope.row.cover" class="cover"/>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="名称">
                </el-table-column>
                <el-table-column
                    prop="create_time"
                    label="添加时间">
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>  
        </div>
    </el-container>
</template>
<style lang="scss" scoped>
    .goods-box {
        width: 100%;
    }
    .pagination {
        padding: 30px 0;
        text-align: center;
    }
    .cover {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
</style>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
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