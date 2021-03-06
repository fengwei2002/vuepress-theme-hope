<template>
  <span v-if="$tags.length !== 0">
    <TagIcon />
    <ul class="tags-wrapper">
      <li
        v-for="(tag, index) in $tags"
        :key="tag"
        class="tag"
        :class="{ clickable, [`tag${index % 9}`]: true }"
        @click="navigate(tag)"
        v-text="tag"
      />
    </ul>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TagIcon from "@mr-hope/vuepress-shared-utils/icons/TagIcon.vue";
import { capitalize } from "@mr-hope/vuepress-shared-utils";

@Component({ components: { TagIcon } })
export default class TagInfo extends Vue {
  @Prop({ type: Array, default: () => [] })
  private readonly tags!: string[];

  private get $tags() {
    if (this.tags.length !== 0) return this.tags;

    const { tag, tags = tag } = this.$frontmatter;

    if (typeof tags === "string") return [capitalize(tags)];

    if (Array.isArray(tags)) return tags.map((item) => capitalize(item));

    return [];
  }

  private get clickable() {
    return this.$themeConfig.blog !== false;
  }

  private navigate(tagName: string) {
    const path = `/tag/${tagName}/`;
    if (this.$route.path !== path) this.$router.push(path);
  }
}
</script>

<style lang="stylus">
.tags-wrapper
  list-style none
  padding-left 0
  margin 0

  .tag
    display inline-block
    position relative
    margin 0 2px
    vertical-align middle
    font-size 12px
    border-radius 12px
    overflow hidden
    transition all 0.5s
    padding 1px 4px
    background-color #f8f8f8
    border-width 0.5px
    border-style solid

    &.clickable:hover
      cursor pointer
      box-shadow 0 1px 6px 0 var(--card-shadow-color, rgba(0, 0, 0, 0.2))
      background-color var(--background-color, #fff)

    .theme-dark &
      background-color #222

@require '~@mr-hope/vuepress-shared-utils/styles/colors.styl'

for $color, $index in $colors
  .tags-wrapper .tag{$index}
    &, .theme-light &
      color lighten($color, 10%)
      border-color lighten($color, 10%)

      &.clickable:hover
        color $color
        border-color $color

    .theme-dark &
      color darken($color, 10%)
      border-color darken($color, 10%)

      &.clickable:hover
        color $color
        border-color $color
</style>
