<template>
  <div>
    <!--<div class="am-form-group" :pos-obj>-->
      <!--<input type="text" class="am-form-field" v-model="dateTime" :click="handleClick">-->
    <!--</div>-->
    <!--<date-time-picker v-if="show" caret-displayed :style="pos"-->
                      <!--:date-time.sync="dateTimeDate"-->
                      <!--:show-date-picker="!timeOnly"-->
                      <!--:show-time-picker="!dateOnly">-->
    <!--</date-time-picker>-->
  </div>

</template>

<script>

  import dateTimePicker from './datetimepicker.vue';

  export default {

    props: {
      dateTime: {
        type: String,
        twoWay: true,
        required: true
      },
      dateOnly: {
        type: Boolean,
        default: false
      },
      timeOnly: {
        type: Boolean,
        default: false
      }
    },

    components: {
      dateTimePicker
    },

    data() {
      var dateTimeDate = new Date(this.dateTime);
      return {
        show: false,
        pos: {
          "top": '',
          "left": '',
          "position": 'absolute',
          "z-index": 1120
        },
        dateTimeDate: dateTimeDate
      };
    },

    watch: {
      dateTimeDate(date) {
        this.dateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        this.show = false;
      }
    },

    methods: {

      handleClick() {
        var posObj = this.$els.posObj;
        this.pos.top = posObj.offsetTop + posObj.offsetHeight + 'px';
        this.pos.left = posObj.offsetLeft + 'px';
        this.show = true;
      }
    }

  };

</script>
