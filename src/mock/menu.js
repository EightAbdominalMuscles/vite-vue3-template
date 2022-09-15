import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 获取验证码
    Mock.mock(new RegExp('/prod-api/getRouters'), () => {
      return successResponseWrap({
        data: [
          {
            name: 'System',
            path: '/system',
            hidden: false,
            redirect: 'noRedirect',
            component: 'Layout',
            alwaysShow: true,
            meta: {
              title: '系统管理',
              icon: 'system',
              noCache: false,
              link: null
            },
            children: [
              {
                name: 'Log',
                path: 'log',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '日志管理',
                  icon: 'log',
                  noCache: false,
                  link: null
                },
                children: [
                  {
                    name: 'Operlog',
                    path: 'operlog',
                    hidden: false,
                    component: 'monitor/operlog/index',
                    meta: {
                      title: '操作日志',
                      icon: 'form',
                      noCache: false,
                      link: null
                    }
                  },
                  {
                    name: 'Logininfor',
                    path: 'logininfor',
                    hidden: false,
                    component: 'monitor/logininfor/index',
                    meta: {
                      title: '登录日志',
                      icon: 'logininfor',
                      noCache: false,
                      link: null
                    }
                  }
                ]
              }
            ]
          },
          {
            name: 'Monitor',
            path: '/monitor',
            hidden: false,
            redirect: 'noRedirect',
            component: 'Layout',
            alwaysShow: true,
            meta: {
              title: '系统监控',
              icon: 'monitor',
              noCache: false,
              link: null
            },
            children: [
              {
                name: 'Online',
                path: 'online',
                hidden: false,
                component: 'monitor/online/index',
                meta: {
                  title: '在线用户',
                  icon: 'online',
                  noCache: false,
                  link: null
                }
              }
            ]
          }
        ]
      })
    })
  }
})
