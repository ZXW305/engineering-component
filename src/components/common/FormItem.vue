<template>
  <div>
    <ul class="form-ul" v-if="item">
      <li>
       <span class="label"><i v-if="item.require" class="require">*</i>{{item.labelText}}</span>
       <div class="inputContent">
         <select v-if="item.inputType==='select'" v-model="vInput" class="select" @change="onChange(item.paramKey)">
           <option v-for="opt in item.opts" v-bind:value="opt.value">{{opt.text}}</option>
         </select>
         <input type='text' v-if="item.inputType==='input'" v-model="vInput" class="input"/>
         <span v-if="item.inputType==='input' && vInput.length"  class="clear" @click="clear()"></span>
         <textarea v-if="item.inputType==='textarea'" class="input textarea" v-model="vInput"></textarea>
         <slot></slot>
       </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    name: 'formItem',
    props:{
      item:Object,
      pdata:String,
    },
    data(){
      return{
        formData: {},
        animationOk: false,
        animationCancel: false,
        vInput:'',
      }
    },
    updated(){
      this.$parent[this.pdata] = this.vInput;
    },

    methods:{
      clear(key){
        this.vInput = ''
      },
      onChange(target){
        this.$emit('onChange',{target: target, value: this.formData[target]})
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

}
.form-ul li{
  display:flex;
  margin-left:.1rem;
  border-bottom:solid .01rem #eee;
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
  width:1.125rem;
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
  width:2.625rem;
  position:relative;
}
.form-ul li .input{
  height: .25rem;
  border-radius: .04rem;
  margin-top: .03rem;
  margin-bottom: .03rem;
  margin-right:.1rem;
  border: .01rem solid #eee;
  width:-webkit-fill-available;
  text-align: center;
}
.form-ul li .textarea{
  height:.5rem;
}
.btngp{
  position: absolute;
  width: 3.6rem;
  bottom: .1rem;
  left:.072rem;
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
  border: .01rem solid #2196f3;
}
.ok_animation{
  animation: btn_ok_animation .2s;
}
.btngp .cancel{
  background-color:#dddddd;
  border:.01rem solid #dddddd;
}
.cancel_animation{
  animation: btn_cancel_animation .2s;
}
.none{
  height: .25rem;
  border: solid .01rem #eee;
  border-radius: .04rem;
}
.clear{
  position:absolute;
  right: .16rem;
  top: .08rem;
  background-image:url('../../assets/images/clear.png');
  height:.18rem;
  width:.18rem;
  background-size:.18rem .18rem;
}
@keyframes btn_ok_animation{
  from {background-color: #2196f3;}
  50% {background-color: #57758c;}
  to {background-color: #2196f3;}
}
@keyframes btn_cancel_animation{
  from{background-color: #dddddd}
  50% {background-color: #c7b3b3;}
  to {background-color: #dddddd;}
}
</style>
