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
        {inputType:'input', labelText:'商户名称',paramKey:'a',require:false, value:[{value:'1',text:'北京'}]},
        {inputType:'input', labelText:'公司地址',paramKey:'a',require:false, value:[{value:'1',text:'北京'}]},
        {inputType:'input', labelText:'联系人姓名',paramKey:'a',require:true, value:[{value:'1',text:'北京'}]},
        {inputType:'input', labelText:'手机号码',paramKey:'a',require:true, value:[{value:'1',text:'北京'}]}
        ],
        btns:[{class:'ok',text:'提交'}],
      }
    }
   }
</script>
<style scope>
.home{
  font-size:.14rem;
}
</style>
