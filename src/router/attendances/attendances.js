import Attendances from '@/view/Attendances/index.vue'
import imDocument from '@/view/Attendances/imDocument.vue'
export default {
  path: 'attendances',
  component: Attendances,
  name: 'Attendances',
  meta: {
    title: '考勤'
  },
  children: [
    {
      path: 'imdocument',
      component: imDocument
    }
  ]
}
