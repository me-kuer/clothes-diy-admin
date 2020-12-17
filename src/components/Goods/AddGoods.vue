<template>
    <el-container>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品名称">
                <el-input v-model="form.name" class="input" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input type="number" min="0" class="input" v-model="form.price" placeholder="请输入商品价格"></el-input>
            </el-form-item>
            <el-form-item label="是否上架">
                <el-switch v-model="form.status"></el-switch>
            </el-form-item>
            <el-form-item label="定制图案">
                <el-checkbox-group class="picture-list" v-model="form.type">
                    <div v-for="v in picture_list" :key="v.id" class="picture-box">
                        <div class="picture">
                            <img :src="v.src" alt="">
                        </div>
                        <div class="picture-checkbox">
                            <el-checkbox :label="v.id" name="type">{{v.name}}</el-checkbox>
                        </div>
                    </div>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="颜色">
                <ul class="color-list">
                    <li class="color-box">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            accept="image/*"
                            :on-preview="handlePictureCardPreview" 
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </li>
                </ul>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>
<style lang="scss" scoped>
    .input {
        width: 300px;
    }
    .picture-list {
        display: flex;
    }
    .picture-box {
        width: 110px;
        padding: 10px;
    }
    .picture {
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            width: 90px;
            height: 90px;
            object-fit: cover;
        }
    }
     
    .picture-checkbox {
        text-align: center;
    }

    .color-list {
        li {
            list-style: none;
            border: 1px solid red;

        }
        
    }
</style>
<script>
export default {
    name: "AddGoods",
    data() {
        return {
            form: {
                name: '',
                price: "",
                region: '',
                date1: '',
                date2: '',
                status: true,
                type: [],
                resource: '',
                desc: ''
            },
            picture_list: [
                {
                    id: 1,
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1136490818,3475263097&fm=26&gp=0.jpg",
                    name: "蒙奇·D·路飞"
                },{
                    id: 2,
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2780340717,67488215&fm=26&gp=0.jpg",
                    name: "柯南"
                },{
                    id: 3,
                    src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2575195025,1696525436&fm=26&gp=0.jpg",
                    name: "哆啦A梦"
                },{
                    id: 4,
                    src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=35894964,1422761700&fm=26&gp=0.jpg",
                    name: "犬夜叉"
                },{
                    id: 5,
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4107424207,3528680916&fm=26&gp=0.jpg",
                    name: "火影忍者"
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>