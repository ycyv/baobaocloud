# coding: utf-8


msg_code = {
    0: '成功',
    1: '未知错误',
    2: '用户名或密码错误',
    3: '图片验证码错误',
    4: '用户已存在',
    5: '该邮箱已注册',
}

class ActMail(object):
    subject = '宝宝云帐号注册激活邮件'
    content = '感谢您申请注册宝宝云账号! 请点击链接完成注册: '
    source = 'enfancemill@gmail.com'
