<template>
  <div class="bu-page-header-container">
    <div class="bu-page-header">
      <div class="bu-page-header__left" @click="$emit('back')">
        <i class="el-icon-back"></i>
        <div class="bu-page-header__title">
          <slot name="title">{{title}}</slot>
        </div>
      </div>
      <div class="bu-page-header__content" :style="{color:color}">
        <template v-if="strong">
          <slot name="content">
            <strong>{{content}}</strong>
          </slot>
        </template>
        <template v-else>
          <slot name="content">{{content}}</slot>
        </template>
      </div>
    </div>
    <div v-if="showSplit" class="bu-page-header__split"></div>
  </div>
</template>

<script>
export default {
  name: 'BuPageHeader',
  props: {
    title: {
      type: String,
    },
    content: String,
    showSplit: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#303133'
    },
    strong: {
      type: Boolean,
      default: false
    },
  }
};
</script>
<style scoped>
.bu-page-header-container {
  padding: 24px;
}
.bu-page-header {
  display: flex;
  line-height: 24px;
}

.bu-page-header__left {
  display: flex;
  cursor: pointer;
  margin-right: 40px;
  position: relative;
  align-items: center;
}

.bu-page-header__title {
  font-size: 14px;
  font-weight: 500;
}

.bu-page-header__content {
  font-size: 16px;
  color: #303133;
}

.bu-page-header__left:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 16px;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #dcdfe6;
}
.bu-page-header__split {
  margin-top: 10px;
  border: 1px solid;
  border-radius: -6px;
  width: 100%;
  height: 1px;
  border-bottom: 1px;
  border-color: #dcdfe6;
}
</style>