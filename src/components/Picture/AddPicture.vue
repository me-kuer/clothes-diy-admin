<template>
    <el-container>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="图案名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="图案">
                <!-- 选择图片控件 -->
                <el-upload
                    :action="upload_url"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    accept="image/png"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <!-- 显示图片 -->
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    name: "AddPicture",
    data() {
        return {
            form: {
                name: '',
                
            },
            upload_url: ""
        }
    },
}
</script>