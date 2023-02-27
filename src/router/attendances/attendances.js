import Attendances from '@/view/Attendances/index.vue'
import imDocument from '@/view/Attendances/imDocument.vue'
export default{
    path:'attendances',
    component:Attendances,
    // redirect:'',
    children:[
        {
            path:'imdocument',
            component:imDocument
        }
    ]
}                           