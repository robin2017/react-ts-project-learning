import Home from '../pages/index'
import Detail from '../pages/detail'
import IOC from '../pages/ioc'
import IOCD from '../pages/ioc_decorator'
import Inversify from '../pages/inversify'
export default [
    {
        path: '/',
        component: Home,
        label: '主页'
    },
    {
        path: '/detail',
        component: Detail,
        label: '详情页'
    },
    {
        path: '/ioc',
        component: IOC,
        label: 'ioc'
    },
    {
        path: '/ioc-decorator',
        component: IOCD,
        label: 'ioc装饰器'
    },
    {
        path: '/inversify',
        component: Inversify,
        label: 'inversify'
    }
]