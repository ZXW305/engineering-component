<template>
<div class="home">
  <FormItem :formItems="formItems" :btns="btns">
  </FormItem>
</div>
</template>
<script>
import FormItem from './common/FormItem.vue'
   export default {
    name: 'home',
    components:{
      FormItem,
    },
    data(){
      return {
        formItems:[{labelText:'所在城市',require:true,inputType:'select', value:[{value:'1',text:'北京'}]},{inputType:'textarea',labelText:'所在城市城市',require:false, value:[{value:'1',text:'北京'}]}],
        btns:[{class:'ok',text:'提交'},{class:'cancel',text:'取消'}],
      }
    }
   }
</script>
<style scope>
.home{
  font-size:.14rem;
}
</style>
