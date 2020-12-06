# Events

```vue
<template>
  <vue-seamless-scroll :data="listData" @ScrollEnd="ScrollEnd" class="warp">
    <ul class="item">
      <li v-for="(item, index) in listData" :key="index">
        <span class="title" v-text="item.title"></span>
        <span class="date" v-text="item.date"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
````

## ScrollEnd

```javascript
    ScrollEnd: function(){
      console.log("ScrollEnd")
    }
```

