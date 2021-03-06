import Vue from 'vue'
import Home from 'src/routes/Home'

describe('Home.vue', () => {
  it('should wait', done => {
    setTimeout(() => {
      done()
    }, 1500)
  })
  it('should render correct contents', () => {
    const vm = new Vue({
      el:     document.createElement('div'),
      render: (h) => h(Home),
    })

    expect(vm.$el.querySelector('.intro h1').textContent)
      .to.equal('A modern kanban created in Vue with RESTful api')
  })
})
