<script>
export default {
  props: ["log"],
};
</script>

<template>
  <el-card class="my-2">
    <div slot="header" class="clearfix">
      <span>{{ log.date }}</span>
    </div>
    {{ log.logMsg }}
  </el-card>
</template>
