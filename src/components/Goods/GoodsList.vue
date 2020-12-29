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
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-link class="el-button el-button--mini" :href="`https://element.eleme.io?goods_id=${scope.row.id}`">
                            <i class="el-icon-edit"></i>
                        </el-link>
                        <el-button type="danger" size="mini" :click="delGoods(scope.row.id)" plain>
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
    .goods-box {
        width: 100%;
    }
    .pagination {
        padding: 30px 0;
        text-align: center;
    }
    .cover {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
</style>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    create_time: '2016-05-02',
                    name: '王小虎',
                    cover: 'https://img.alicdn.com/bao/uploaded/i1/2935730475/O1CN01X5JlyS1FNaglpyYmA_!!0-item_pic.jpg'
                }, {
                    id: 2,
                    create_time: '2016-05-04',
                    name: '王小虎',
                    cover: 'https://img.alicdn.com/bao/uploaded/i1/2927900500/TB2FY.hqZyYBuNkSnfoXXcWgVXa_!!2927900500.jpg'
                }, {
                    id: 3,
                    create_time: '2016-05-01',
                    name: '王小虎',
                    cover: 'https://img.alicdn.com/bao/uploaded/i2/3370254493/O1CN015jlowF1j3q9gd43Ry_!!0-item_pic.jpg'
                }, {
                    id: 4,
                    create_time: '2016-05-03',
                    name: '王小虎',
                    cover: 'https://img.alicdn.com/bao/uploaded/i1/3377648418/O1CN01pZxass2C3Ue3dOux3_!!3377648418.jpg'
                }
            ]
        }
    },
    methods: {
        delGoods(){

        }
    }
}
</script>