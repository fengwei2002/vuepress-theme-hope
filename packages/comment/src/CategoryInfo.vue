<template>
  <span v-if="categoryName" class="category-info" :class="{ active }" @click="navigate">
    <CategoryIcon />
    <span v-text="categoryName" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoryIcon from "@mr-hope/vuepress-shared-utils/icons/CategoryIcon.vue";
import { capitalize } from "@mr-hope/vuepress-shared-utils";

@Component({ components: { CategoryIcon } })
export default class CategoryInfo extends Vue {
  @Prop({ type: String, default: "" })
  private readonly category!: string;

  private get categoryName(): string {
    if (this.category) return capitalize(this.category);

    const { category } = this.$frontmatter;

    return category ? capitalize(category) : "";
  }

  private get active(): boolean {
    return this.$themeConfig.blog !== false;
  }

  private navigate() {
    const path = `/category/${this.categoryName}/`;

    if (this.active && this.$route.path !== path) this.$router.push(path);
  }
}
</script>

<style lang="stylus">
.category-info.active:hover
  cursor pointer
  color var(--accent-color, $accentColor)
</style>
