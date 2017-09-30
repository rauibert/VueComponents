Vue.component('pass', {
  props: ['password'],
  template: `<input type="text" :value="password" @input="comprobarPass($event.target.value)" ref="passRef">`,
  methods: {
    comprobarPass(password) {

      if(this.noValidas.includes(password)){
        this.$refs.passRef.value = password = '';
      }
      this.$emit('input', password);
    }
  },
  data() {
    return {
      noValidas: ['abc', 'admin', '123456', 'root'],
    }
  }
});

new Vue({
  el: 'main',
  data: {
    password: 'pass123'
  },
});
