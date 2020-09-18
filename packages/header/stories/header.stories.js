import BuPageHeader from '../src/page-header.vue';

export default {
  title: 'Example/BuPageHeader',
  component: BuPageHeader,
};

// const style = 'style="margin-left:10px;"'

export const Simple = () => ({
  components: { BuPageHeader },
  template:
    '<div>' +
    '<bu-page-header title="返回" @back="back" content="页面详情"></bu-page-header>' +
    '<br/>' +
    '<bu-page-header :strong="true" :showSplit="true" title="返回" @back="back" content="页面详情"></bu-page-header>' +
    '<br/>' +
    '<bu-page-header :strong="true" color="#409EFF" :showSplit="true" title="返回" @back="back" content="页面详情"></bu-page-header>' +
    '</div>',
  methods: {
    back() {
      console.info('back')
    }
  }
})

