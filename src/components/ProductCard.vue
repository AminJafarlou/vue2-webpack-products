<template>
  <div class="card">
    <div class="card-image-wrapper">
      <img class="card-image" :src="image" :alt="title" />
    </div>

    <div class="card-content">
      <div class="card-content-inner">
        <p class="title">{{ trimmedTitle }}</p>
        <app-tag-view :title="category" />
        <app-tag-view :title="price" />
        <div class="description-wrapper">
          <p>{{ trimmedDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagView from "./TagView.vue";

export default {
  name: "VueWebpackProductCard",

  props: ["id", "category", "description", "image", "price", "rating", "title"],

  data() {
    return {};
  },

  computed: {
    trimmedTitle() {
      return this.title.length > 50
        ? this.title.slice(0, 47) + "..."
        : this.title;
    },
    trimmedDescription() {
      return this.description.length > 100
        ? this.description.slice(0, 97) + "..."
        : this.description;
    }
  },

  components: {
    "app-tag-view": TagView
  }
};
</script>

<style lang="" scoped>
.card {
  width: 280px;
  height: 400px;
  display: flex;
  border-radius: 5px;
  padding-block: 8px;
  padding-inline: 4px;
  background-color: #fff;
  margin-block-end: 8px;
  flex-direction: column;
  border: 1px solid #fafafa;
  gap: 24px;
}
.card-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}
.card-image {
  flex: 1;
  width: auto;
  height: auto;
  max-width: 192px;
  max-height: 200px;
}
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-content-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 16px;
  margin-block-end: 8px;
}
.description-wrapper {
  flex: 1;
  display: flex;
  align-items: flex-end;
}
</style>
