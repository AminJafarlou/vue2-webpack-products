<template>
  <div class="tag">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "VueWebpackTagView",

  props: ["title"]
};
</script>

<style>
.tag {
  height: 24px;
  padding-block: 2px;
  padding-inline: 6px;
  width: fit-content;
  border-radius: 50px;
  background-color: #d1d1d1;
}
</style>
