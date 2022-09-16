<template>
  <el-dialog
    v-bind="$attrs"
    v-model="dialogVisible"
    title="修改头像"
    @close="closeDialog"
  >
    <el-row>
      <el-col :xs="24" :md="12" :style="{ height: '350px' }">
        <vue-cropper
          v-if="visible"
          ref="avatarCropper"
          :img="options.img"
          :info="true"
          :auto-crop="options.autoCrop"
          :auto-crop-width="options.autoCropWidth"
          :auto-crop-height="options.autoCropHeight"
          :fixed-box="options.fixedBox"
          @real-time="realTime"
        />
      </el-col>
      <el-col :xs="24" :md="12" :style="{ height: '350px' }">
        <div class="avatar-upload-preview">
          <img :src="options.previews.url" :style="options.previews.img" />
        </div>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :lg="2" :md="2"> </el-col>
      <el-col :lg="{ span: 1 }" :md="2">
        <el-button icon="Plus" @click="changeScale(1)"></el-button>
      </el-col>
      <el-col :lg="{ span: 1, offset: 1 }" :md="2">
        <el-button icon="Minus" @click="changeScale(-1)"></el-button>
      </el-col>
      <el-col :lg="{ span: 1, offset: 1 }" :md="2">
        <el-button icon="RefreshLeft" @click="rotateLeft()"></el-button>
      </el-col>
      <el-col :lg="{ span: 1, offset: 1 }" :md="2">
        <el-button icon="RefreshRight" @click="rotateRight()"></el-button>
      </el-col>
      <el-col :lg="2" :md="2"> </el-col>
      <el-col style="padding-bottom: 20px" :lg="{ span: 2, offset: 6 }" :md="2">
        <el-button
          :loading="loading"
          class="minw-96"
          type="primary"
          @click="uploadImg()"
          >更 换</el-button
        >
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
// import { uploadFile } from '@/api/user'
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import useLoading from '@/hooks/loading'
// setup的执行时组件对象还没有创建
const { proxy } = getCurrentInstance()

const dialogVisible = ref(false)
// 裁剪工具的显示
const visible = ref(false)
const { loading, setLoading } = useLoading()
// const emit = defineEmits(['onSuccess'])
// 图片裁剪数据
const options = reactive({
  img: '', // 裁剪图片的地址
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 200, // 默认生成截图框宽度
  autoCropHeight: 200, // 默认生成截图框高度
  fixedBox: true, // 固定截图框大小 不允许改变
  previews: {} // 预览数据
})
const open = (file) => {
  dialogVisible.value = true
  visible.value = true
  options.img = file
}

// 向左旋转
const rotateLeft = () => {
  proxy.$refs.avatarCropper.rotateLeft()
}
// 向右旋转
const rotateRight = () => {
  proxy.$refs.avatarCropper.rotateRight()
}
// 向右旋转
const changeScale = (num) => {
  num = num || 1
  proxy.$refs.avatarCropper.changeScale(num)
}
// 实时预览
const realTime = (data) => {
  options.previews = data
}
// 关闭
const closeDialog = () => {
  dialogVisible.value = false
  visible.value = false
}
// 上传图片
const uploadImg = () => {
  proxy.$refs.avatarCropper.getCropBlob(async (data) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('file', data, `${Date.now()}.jpg`)
    try {
      // const res = await uploadFile(formData)
      // emit('onSuccess', res.data)
      closeDialog()
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  })
}
defineExpose({
  open
})
</script>

<style scoped lang="scss">
.avatar-upload-preview {
  position: absolute;
  top: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  transform: translate(50%, -50%);
}
</style>
