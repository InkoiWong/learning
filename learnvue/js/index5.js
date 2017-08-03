// 1-1
var app1 = new Vue({
    el: '#app1',
    data: {
        isActive: true,
        hasError: false,
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    }
});

// 1-2
var app4 = new Vue({
    el: '#app4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});


// 1-3
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})




