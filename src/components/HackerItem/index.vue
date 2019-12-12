<template>
  <div class="ui segment">
      <a :href="story.url">
          <div class="item">
            <p>
                {{ story.title }} - By: {{ story.by }}
            </p>
          </div>
      </a>
  </div>
</template>

<script>
export default {
    name: 'HackerItem',
    props: {
        story: { type: Object }
    }
}
</script>

<style>
</style>