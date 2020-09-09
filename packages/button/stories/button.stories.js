import BuButton from '../src/button.vue';

export default {
  title: 'Example/BuButton',
  component: BuButton,
};

const style = 'style="margin-left:10px;"'

export const Regular = () => ({
  components: { BuButton },
  template:
    '<div>' +
    '<bu-button ' + style + '>按钮</bu-button>' +
    '<bu-button type="primary" ' + style + '>按钮</bu-button>' +
    '<bu-button type="success" ' + style + '>按钮</bu-button>' +
    '<bu-button type="info" ' + style + '>按钮</bu-button>' +
    '<bu-button type="warning" ' + style + '>按钮</bu-button>' +
    '<bu-button type="danger" ' + style + '>按钮</bu-button>' +
    '</div>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})

export const Plain = () => ({
  components: { BuButton },
  template:
    '<div>' +
    '<bu-button plain ' + style + '>按钮</bu-button>' +
    '<bu-button plain type="primary" ' + style + '>按钮</bu-button>' +
    '<bu-button plain type="success" ' + style + '>按钮</bu-button>' +
    '<bu-button plain type="info" ' + style + '>按钮</bu-button>' +
    '<bu-button plain type="warning" ' + style + '>按钮</bu-button>' +
    '<bu-button plain type="danger" ' + style + '>按钮</bu-button>' +
    '</div>',

  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})

export const Round = () => ({
  components: { BuButton },
  template:
    '<div >' +
    ' <bu-button round plain ' + style + '>按钮</bu-button>' +
    ' <bu-button round plain type="primary" ' + style + '>按钮</bu-button>' +
    ' <bu-button round plain type="success" ' + style + '>按钮</bu-button>' +
    '<bu-button round plain type="info" ' + style + '>按钮</bu-button>' +
    ' <bu-button round plain type="warning" ' + style + '>按钮</bu-button>' +
    '<bu-button :disabled="true" round plain type="danger" ' + style + '>按钮</bu-button>' +
    '</div>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})

export const Circle = () => ({
  components: { BuButton },
  template:
    '<div>' +
    '<bu-button icon="el-icon-check" circle></bu-button>' +
    '<bu-button icon="el-icon-ice-tea" circle type="primary" ' + style + '></bu-button>' +
    '<bu-button icon="el-icon-apple" circle type="success" ' + style + '></bu-button>' +
    '<bu-button icon="el-icon-tableware" circle type="info" ' + style + '></bu-button>' +
    '<bu-button icon="el-icon-watch" circle type="warning" ' + style + '></bu-button>' +
    '<bu-button icon="el-icon-place" circle type="danger" ' + style + '></bu-button>' +
    '</div>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})
