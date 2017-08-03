// 1-1
var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
});


// 1-2
// in component
var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Hello'
    },
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
    },
    computed: {//计算属性
        now: function () {
			return Date.now()
        }
    }
});
var app4 = new Vue({
    el: '#app4',
    data: {
    },
    methods: {//方法 需要调用
        now: function () {
			return Date.now()
        }
    }
});
// 在控制台console.log
// app3.now --> 定值
// app4.now() --> 动态值


// 1-3
var app5 = new Vue({
  el: '#app5',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
var app6 = new Vue({
  el: '#app6',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})


// 1-4
var app7 = new Vue({
    el: '#app7',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
	computed: {
		fullName: {
			// getter
			get: function () {
				return this.firstName + ' ' + this.lastName
			},
			// setter
			set: function (newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})
// 控制台中
// 现在再运行 vm.fullName = 'John Doe' 时， setter 会被调用， 
// vm.firstName 和 vm.lastName 也相应地会被更新。