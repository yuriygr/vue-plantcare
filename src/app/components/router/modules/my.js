import My from '@/views/My'
import { MyCalendar, MyPlants } from '@/views/_my'

export default [
  {
    path: '/my',
    name: 'my',
    component: My,
    meta: { requiresAuth: true },
    children: [
      { path: 'calendar',       name: 'my-calendar',     component: MyCalendar },
      { path: 'plants',         name: 'my-plants',       component: MyPlants },
      { path: 'plants/:id',     name: 'my-plant',        component: MyPlants },
    ]
  }
]