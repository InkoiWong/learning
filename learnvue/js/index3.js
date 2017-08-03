//1-1
var app1 = new Vue({
    el: '#app1',
    data: {
        msg: 'app1的内容',
    }
});
var app2 = new Vue({
   el: '#app2',
   data: {
       msg: 'app2的内容',
   }
});

//1-2
var app3_text = new Vue({
    el: '#app3-text',
    data: {
        msg: '<ul><li>纯文本</li></ul>'
    }
});
var app3_html = new Vue({
    el: '#app3-html',
    data: {
        rawHtml: '<ul><li>生成的html内容</li></ul>',
    }
});

//1-3
var app4 = new Vue({
    el: '#app4',
    data: {
        dynamicId: 'app4newid',
        msg: 'This is app4',
    }
});
var app5 = new Vue({
    el: '#app5',
    data: {
        someDynamicCondition: true,
    }
})

//1-4
var app6 = new Vue({
    el: '#app6',
    data: {
        id: '1',
        msg: 'This is app6',
    }
});
var app7 = new Vue({
    el: '#app7',
    data: {
        number: 100,
    }
});
var app8 = new Vue({
    el: '#app8',
    data: {
        ok: false,
    }
});
var app9 = new Vue({
    el: '#app9',
    data: {
        message: '这句话是顺着读的',
    }
});
//var app10 = new Vue({
//  el: '#app10',
//  data: {
//      a: 1,
//  }
//});
//var app11 = new Vue({
//  el: '#app11',
//  data: {
//      ok: true,
//      message: 'This is app11',
//  }
//});



//2
var app12 = new Vue({
    el: '#app12',
    data: {
        seen: true,
    }
});

//2-1
var app13 = new Vue({
    el: '#app13',
    data: {
        url: 'www.baidu.com',
    }
});
var app14 = new Vue({
    el: '#app14',
    data: {
        msg: 'click here to alert some msg'
    },
    methods: {
        doSomething: function () {
            alert('doSomething');
        }
    }
});
var app15 = new Vue({
    el: '#app15',
    data: {
        msg: '点击这句话能改变文字的顺序'
    },
    methods: {
        reverseMsg: function () {
            this.msg = this.msg.split('').reverse().join('');
        }
    }
});

//2-2
var app16 = new Vue({
    el: '#app16',
    data: {
        
    },
    methods: {
        onSubmit: function () {
            console.log('submit success');
        }
    }
});

//2-3
var app17 = new Vue({
    el: '#app17',
    data: {
        message: 'abc',
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        }
    },
});
var app18 = new Vue({
    el: '#app18',
    data: {
        rawId: 'def',
        msg: 'This is app18, and its oldId is def',
    },
    filters: {
        formatId: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
});
var app19 = new Vue({
    el: '#app19',
    data: {
        msg: 'abcdefg',
    },
    filters: {
        filterA: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        filterB: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.slice(0, 1) + value.charAt(1).toUpperCase() + value.slice(1)
        },
    },
});
var app19derive = new Vue({
    el: '#app19derive',
    data: {
        msg: 'abcdefg',
    },
    methods: {
        filterA: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        filterB: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.slice(0, 1) + value.charAt(1).toUpperCase() + value.slice(1)
        },
    },
});
//var app20 = new Vue({
//  el: '#app20',
//  data: {
//      msg: 'hijklmn',
//      arg2: 'opq',
//  },
//  filters: {
//      filterA: function (valone, valtwo, valthree) {
//          return valone + valtwo + valthree;
//      },
//  },
//});
var app20 = new Vue({
    el: '#app20',
    data: {
        msg: 'hijklmn',
    },
    methods: {
        arg2: function () {
            return 'opq';
        }
    },
    filters: {
        filterA: function (valone, valtwo, valthree) {
            return valone + valtwo + valthree();
        },
    },
});
var app20derive = new Vue({
    el: '#app20derive',
    data: {
        msg: 'hijklmn',
        arg2: 'opq',
    },
    methods: {
        filterA: function (valone, valtwo, valthree) {
            return valone + valtwo + valthree;
        },
    },
});
