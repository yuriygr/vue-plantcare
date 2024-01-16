import Settings from '@/views/Settings'
import { SettingsMenu } from '@/views/_settings'

export default [
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: { requiresAuth: true },
    redirect: { name: 'settings-menu' },
    children: [
      { path: '', name: 'settings-menu', component: SettingsMenu },
      { path: 'profile', name: 'settings-profile', component: SettingsMenu },
      { path: 'notifications', name: 'settings-notifications', component: SettingsMenu },
      { path: 'connections', name: 'settings-connections', component: SettingsMenu },
      { path: 'password', name: 'settings-password', component: SettingsMenu },
      { path: 'login-activity', name: 'settings-login-activity', component: SettingsMenu },
      { path: 'login-alerts', name: 'settings-login-alerts', component: SettingsMenu },
      { path: 'gdpr', name: 'settings-gdpr', component: SettingsMenu },
      { path: 'delete-account', name: 'settings-delete-account', component: SettingsMenu },
    ]
  }
]