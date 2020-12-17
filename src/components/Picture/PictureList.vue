<template>
    <el-container>
        <div class="picture-box">
            <el-table
                :data="tableData">
                <el-table-column
                    prop="date"
                    label="编号">
                </el-table-column>
                <el-table-column
                    label="图案">
                    <template slot-scope="scope">
                        <img :src="scope.row.src" class="picture-img">
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
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">
                            <i class="el-icon-delete"></i>
                        </el-button>
                    </template>
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
<style lang="scss" scoped>
    .picture-box {
        width: 100%;
    }
    .picture-img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }
    .pagination {
        padding: 30px 0;
        text-align: center;
    }
</style>
<script>
export default {
    name: "PictureList",
    data() {
        return {
            tableData: [
                {
                    date: '1',
                    name: '王小虎',
                    src: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478465503,3665454897&fm=26&gp=0.jpg',
                    create_time: "2020-12-17"
                }, {
                    date: '2',
                    name: '王小虎',
                    src: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478465503,3665454897&fm=26&gp=0.jpg',
                    create_time: "2020-12-17"
                }, {
                    date: '3',
                    name: '王小虎',
                    src: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478465503,3665454897&fm=26&gp=0.jpg',
                    create_time: "2020-12-17"
                }, {
                    date: '4',
                    name: '王小虎',
                    src: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478465503,3665454897&fm=26&gp=0.jpg',
                    create_time: "2020-12-17"
                }
            ]
        }
    },
}
</script>