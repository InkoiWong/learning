var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
//我们已经生成了我们的第一个 Vue 应用！
//看起来这跟单单渲染一个字符串模板非常类似，但是 Vue.js 在背后做了大量工作。
//现在数据和 DOM 已经被绑定在一起，所有的元素都是响应式的。
//我们如何知道？打开你的浏览器的控制台，并修改 app.message，你将看到上例相应地更新。


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})
//你看到的 v-bind 属性被称为指令。
//指令带有前缀 v-，以表示它们是 Vue.js 提供的特殊属性。
//可能你已经猜到了，它们会在渲染过的 DOM 上应用特殊的响应式行为。
//v-bind的简单含义是说：将这个元素节点的 title 属性和 Vue 实例的 message 属性绑定到一起。
//你再次打开浏览器的控制台输入 app2.message = 'some new message'，
//你就会再一次看到这个绑定了title属性的HTML已经进行了更新。


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
//继续在控制台设置 app3.seen = false，你会发现 “Now you see me” 消失了。
//这个例子演示了我们不仅可以绑定 DOM 文本到数据，也可以绑定 DOM 结构到数据。
//而且，Vue.js 也提供一个强大的过渡效果系统，可以在 Vue 插入/删除元素时自动应用过渡效果。


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
//在控制台里，输入 app4.todos.push({ text: 'New item' })。
//你会发现列表中多了一栏新内容。


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//在 reverseMessage 方法中，
//我们在没有接触 DOM 的情况下更新了应用的状态 - 所有的 DOM 操作都由 Vue 来处理，
//你写的代码只需要关注基本逻辑。


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


// Define a new component called todo-item
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
//这只是一个假设的例子，但是我们已经将应用分割成了两个更小的单元，
//子元素通过 props 接口实现了与父亲元素很好的解耦。
//我们现在可以在不影响到父应用的基础上，进一步为我们的 todo 组件改进更多复杂的模板和逻辑

