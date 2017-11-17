<template>
  <div class="main-ctn">
    <div>
      <h1 class="center">{{ msg }}</h1>
      <vue-form :state="formstate" v-model="formstate" @submit.prevent="onSubmit">

        <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.name)">
          <label>昵称：</label>
          <input type="text" name="name" class="form-control" required v-model.lazy="model.name">
          <!--验证信息提示区-->
          <field-messages name="name" show="$touched || $submitted" class="form-control-feedback">
            <div>信息验证通过!</div>
            <div slot="required">请填写昵称</div>
          </field-messages>

        </validate>

        <!--这个用的是自定义的验证规则-->
        <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.idcard)">
          <label>身份证：</label>
          <input type="text" name="idcard" class="form-control" idcard required v-model.lazy="model.idcard">

          <field-messages auto-label name="idcard" show="$touched || $submitted" class="form-control-feedback">
            <div>信息验证通过!</div>
            <div slot="required">此项必填！</div>
            <div slot="idcard">身份证格式不正确！</div>
          </field-messages>

        </validate>





        <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.email)">
          <label>邮箱：</label>
          <input type="email" name="email" class="form-control" required v-model.lazy="model.email">

          <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
            <div>信息验证通过!</div>
            <div slot="required">此项必填！</div>
            <div slot="email">邮箱格式不正确！</div>
          </field-messages>

        </validate>

        <!--还可以像h5一样在行内写正则-->
        <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.phone)">
          <label>手机号码：</label>
          <input type="tel" name="phone" class="form-control" required pattern="^[1][3,4,5,7,8][0-9]{9}$" v-model.lazy="model.phone">

          <field-messages name="phone" show="$touched || $submitted" class="form-control-feedback">
            <div>信息验证通过!</div>
            <div slot="required">此项必填！</div>
            <div slot="pattern">手机号码格式不正确！</div>
          </field-messages>

        </validate>

        <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.department)">
          <label>性别：</label>

          <select class="form-control" name="department" required v-model.lazy="model.department">
            <option :value="null">请选择</option>
            <option value="1">男性</option>
            <option value="2">女性</option>
            <option value="3">中性</option>
          </select>

          <field-messages name="department" show="$touched || $dirty || $submitted" class="form-control-feedback">
            <div>Success!</div>
            <div slot="required">此项必填！</div>
          </field-messages>

        </validate>

        <validate auto-label class="form-group" :class="fieldClassName(formstate.comments)">
          <label>留言：</label>
          <textarea name="comments" class="form-control" maxlength="50" v-model.lazy="model.comments"></textarea>
          <field-messages name="comments" show="$touched || $submitted" class="form-control-feedback">
            <div>信息验证通过!</div>
            <div slot="maxlength">最多只能写50个字！</div>
          </field-messages>
        </validate>

        <field class="form-group">
          <label>没有校验：</label>
          <input type="text" name="notValidated" class="form-control" v-model.lazy="model.notValidated">
        </field>

        <div class="py-2 text-center">
          <button class="form-submit" type="submit">提交</button>
        </div>
      </vue-form>

      <!--<pre>{{formstate}}</pre>-->
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your vee-validate',
        formstate: {},
        model: {
          name: '',
          email: '',
          phone: '',
          department: null,
          comments: '',
          notValidated: '',
          idcard: ''
        }
      }
    },
    methods: {
      fieldClassName: function (field) {
        if(!field) {
          return '';
        }
        //数据校验通过后的class
        if((field.$touched || field.$submitted) && field.$valid) {
          return 'has-success';
        }
        //数据校验不通过后的class
        if((field.$touched || field.$submitted) && field.$invalid) {
          return 'has-danger';
        }
      },
      //提交数据
      onSubmit: function() {
        console.log(this.formstate.$valid);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  input {
    outline: none;
    border:1px solid #aaa;
  }
  .center {
    text-align: center;
  }
  .main-ctn {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .required-field > label::before {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .has-success {
    .form-control {
      border-color: #5cb85c;
    }
  }
  .has-danger {
    .form-control {
      border-color: #d9534f;
    }
  }
  .form-control-feedback {
    padding-left: 6.2rem;
  }
  .has-success {
    .form-control-feedback {
      color:#5cb85c;
    }
  }
  .has-danger {
    .form-control-feedback {
      color:#d9534f;
    }
  }
  .form-group {
    height: 50px;
    margin-bottom: 10px;
    label {
      display: inline-block;
      width: 6rem;
      text-align: right;
    }
    input {
      width: 200px;
      height: 22px;
      border-radius: 5px;
    }
    select {
      width: 200px;
    }
  }
  .form-submit {
    width: 200px;
    border:none;
    background-color: cornflowerblue;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    margin-left: 6.2rem;
  }
</style>
