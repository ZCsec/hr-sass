import Attendances from '@/view/Attendances/index.vue'
import imDocument from '@/view/Attendances/imDocument.vue'
export default{
    path:'attendances',
    component:Attendances,
    children:[
        {
            path:'imdocument',
            component:imDocument
        }
    ]
}                           