<template>
<div>

  <topbar title="Amaze UI vue">
    <am-nav :items="items" topbar pills></am-nav>
  </topbar>

  <topbar inverse title="Amaze UI vue">
    <am-nav :items="items" topbar pills></am-nav>
  </topbar>

  <grid>
    <column :sm="12">
      <div class="am-padding">
        <am-nav :items="items"></am-nav>
      </div>
      <div class="am-padding">
        <am-nav :items="items" pills></am-nav>
      </div>
      <div class="am-padding">
        <am-nav :items="items" tabs></am-nav>
      </div>
      <div class="am-padding">
        <am-nav :items="items" justify pills></am-nav>
      </div>
      <div class="am-padding">
        <am-nav :items="items" justify tabs></am-nav>
      </div>
    </column>
  </grid>
</div>

</template>

<script>

export default {

  data() {
    return {
      items: [{
        text: 'Home',
        link: '/',
        active: true
      }, {
        text: 'components',
        link: '/components'
      }]
    };
  }

}

</script>
