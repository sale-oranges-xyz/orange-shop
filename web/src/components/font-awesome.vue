
<template>
    <FontAwesomeIcon :icon="['fas',icon]"></FontAwesomeIcon>
</template>

<script>
// 字体图标 start
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

export default {
  name: 'font-awesome',
  props: {
    icon: {
      type: String,
      require: true
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
