import Mock from 'mockjs'
import { getToken } from '@/utils/auth'
import setupMock, {
  successResponseWrap,
  failResponseWrap
} from '@/utils/setup-mock'

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 获取验证码
    Mock.mock(new RegExp('/prod-api/captchaImage'), () => {
      return successResponseWrap({
        captchaEnabled: true,
        img: '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',
        uuid: ''
      })
    })
    // 登录
    Mock.mock(new RegExp('/prod-api/login'), (params) => {
      const { username, password, code } = JSON.parse(params.body)
      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 500)
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 500)
      }
      if (!code) {
        return failResponseWrap(null, '验证码不能为空', 500)
      }
      if (username === 'admin' && password === 'admin123') {
        window.localStorage.setItem('userRole', 'user')
        return successResponseWrap({
          token: '54321'
        })
      }
      return failResponseWrap(null, '账号或者密码错误', 500)
    })
    // 用户信息
    Mock.mock(new RegExp('/prod-api/getInfo'), () => {
      if (getToken()) {
        return successResponseWrap({
          permissions: ['*:*:*'],
          roles: ['admin'],
          user: {
            searchValue: null,
            createBy: 'admin',
            createTime: '2022-08-01 12:00:20',
            updateBy: null,
            updateTime: null,
            remark: '管理员',
            params: {
              '@type': 'java.util.HashMap'
            },
            userId: 1,
            deptId: 103,
            userName: 'admin',
            nickName: '李四',
            email: 'xxx@163.com',
            phonenumber: '15888888888',
            sex: '1',
            avatar: '',
            password:
              '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
            status: '0',
            delFlag: '0',
            loginIp: '000.00.74.170',
            loginDate: '2022-09-15T15:33:32.000+08:00',
            dept: {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {
                '@type': 'java.util.HashMap'
              },
              deptId: 103,
              parentId: 101,
              ancestors: '0,100,101',
              deptName: '研发部门',
              orderNum: 1,
              leader: '若依',
              phone: null,
              email: null,
              status: '0',
              delFlag: null,
              parentName: null,
              children: []
            },
            roles: [
              {
                searchValue: null,
                createBy: null,
                createTime: null,
                updateBy: null,
                updateTime: null,
                remark: null,
                params: {
                  '@type': 'java.util.HashMap'
                },
                roleId: 1,
                roleName: '超级管理员',
                roleKey: 'admin',
                roleSort: '1',
                dataScope: '1',
                menuCheckStrictly: false,
                deptCheckStrictly: false,
                status: '0',
                delFlag: null,
                flag: false,
                menuIds: null,
                deptIds: null,
                admin: true
              }
            ],
            roleIds: null,
            postIds: null,
            roleId: null,
            admin: true
          }
        })
      }
      return failResponseWrap(null, '未登录', 500)
    })
    // 登出
    Mock.mock(new RegExp('/prod-api/logout'), () => {
      return successResponseWrap(null)
    })
  }
})
