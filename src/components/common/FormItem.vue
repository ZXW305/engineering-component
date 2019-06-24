<template>
  <div>
    <ul class="form-ul">
      <li v-for="(item,index) in formItems" v-bind:key="index">
       <span class="label"><i v-if="item.require" class="require">*</i>{{item.labelText}}</span>
       <div class="inputContent">
         <Select v-if="item.inputType==='select'" class="select">
           <option v-for="opt in item.value" v-bind:key="opt.value">{{opt.text}}</option>
         </Select>
         <input type='text' v-if="item.inputType==='input'" class="input">
         <textarea v-if="item.inputType==='textarea'" class="input textarea"></textarea>
       </div>
      </li>
    </ul>
    <slot></slot>
    <div class="btngp">
      <ul>
        <li v-for="(btn, index) in btns" v-bind:key="index">
          <button :class="`${btn.class} button`" @click="click(btn)">{{btn.text}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'formItem',
    props:{
      formItems:Array,
      requestOpts:Object,
      btns:Array,
    },
    data(){
      return{

      }
    },
    methods:{
      click(btn){
        if(btn.class === 'ok'){
          this.submit()
        }else if(btn.class === 'cancel'){
          this.cancel()
        }
      },
      submit(){
        //处理提交方法
        const { method, url, callback } = this.props.requestOpts
        const data = []
        axios({
          method,
          url,
          data,
        }).then(suc => {
          this.$emit(callback,suc)
        },err => {
          this.$emit(callback,err)
        })
      },
      cancel(){
      },
    },
  }
</script>
<style scope>
ul{
  list-style:none;
  margin:0;
  padding:0;
}
.form-ul{
  padding-top:.1rem;
}
.form-ul li{
  display:flex;
  margin-left:.1rem;
  border-bottom:solid 1px #eee;
  font-size:.14rem;
  padding: .05rem;
  align-items: center;
  min-height:.3rem;
}
.form-ul .require{
  color:red;
  padding:0 .03rem;
}
.form-ul .label{
  margin-right:.1rem;
  width:30%;
}
.form-ul li .select{
  width:-webkit-fill-available;
  border:none;
  text-align:center;
  text-align-last:center;
}
.form-ul li .select option{
}
.form-ul .inputContent{
  width:70%;
}
.form-ul li .input{
  height: .25rem;
  border-radius: .04rem;
  margin-right:.1rem;
  margin-top: .05rem;
  border: 1px solid #eee;
  width:-webkit-fill-available;
}
.form-ul li .textarea{
  height:.5rem;
}
.btngp{
  margin-top:.1rem;
}
.btngp ul{
  display:flex;
}
.btngp ul li{
   flex: 1;
   text-align:center;
   padding:.02rem .02rem;
}
.btngp .button{
  width:-webkit-fill-available;
  border-radius:.04rem;
  height:.35rem;
}
.btngp .ok{
  background:#2196f3;
  color:white;
}
.btngp .cancel{

}
</style>
