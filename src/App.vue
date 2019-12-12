<template>
  <div id="app">
    <div class="ui container">
      <Search v-model="value" />
      <div v-if="news.length === 0"><Loading /></div>
      <div v-else class="ui list" v-for="story in news" :key="story.id"><HackerItem :story="story" /></div>
    </div>
    {{ value }}
  </div>
</template>

<script>
import escapeRegExp from "escape-string-regexp"

import { getAllNews } from './functions'
import Search from './components/Search'
import HackerItem from './components/HackerItem'
import Loading from './components/Loading'

export default {
  name: 'app',
  components: {
    Search,
    HackerItem,
    Loading
  },
  data: function() {
    return {
      value: '',
      news: []
    }
  },
  async mounted () {
      getAllNews((data) => {
        this.news = data
      })
  },
  watch: {
    value() {
      if(this.value !== "") {
        const match = new RegExp(escapeRegExp(this.value), "i")
        const result = this.news.filter(story => match.test(story.title))      
        this.news = result
      }      
    }
  }
}
</script>

<style>
  #app {
    margin-top: 20px;
  }

  body {
    background-color: black
  }
</style>
