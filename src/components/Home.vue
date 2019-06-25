<template>
<div class="home">
  <FormItem :formItems="formItems" :btns="btns" :requestOpts="requestOpts">
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
        formItems:[{labelText:'所在城市',paramKey:'b',require:true,inputType:'select', value:[{value:'1',text:'北京'}]},
        {inputType:'textarea', labelText:'留言',paramKey:'a',require:false, value:[{value:'1',text:'北京'}]}],
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
