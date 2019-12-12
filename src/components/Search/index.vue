<template>
    <div class="ui segment">
        <form class="ui form">
          <div class="field">
              <input v-model="value" @keyup="updateValue()" placeholder="Buscar Noticias" /> 
          </div>
        </form>        
    </div> 
</template>

<script>
export default {
    name: 'Search',
    data: function() {
        return {
            value: ""
        }
    },
    methods: {
        updateValue() {
            this.$emit("input", this.value)
        }
    }
}
</script>

<style>

</style>