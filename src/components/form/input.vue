<template>

<div class="am-form-group">
  <label :for="'f-'+name"><slot></slot></label>
  <input :id="'f-'+name" v-if="type=='input'" type="input" :name="name" :placeholder="placeholder" :disabled="disabled" v-model="model" />
  <input :id="'f-'+name" v-if="type=='select'" type="select" :name="name" :placeholder="placeholder" :disabled="disabled" v-model="model" />
  <input :id="'f-'+name" v-if="type=='textarea'" type="textarea" :name="name" :placeholder="placeholder" :disabled="disabled" v-model="model" />
</div>

</template>

<script>

module.exports = {

  props: {
    "type": {
      type: String,
      default: 'text'
    },
    "name": {
      type: String,
      required: true
    },
    "placeholder": {
      type: String
    },
    "disabled": {
      type: Boolean,
      default: false
    },
    "model": {
      type: String,
      twoWay: true,
      default: '',
      required: false
    }
  },

  data: function() {
    return {
    };
  }

};

</script>
