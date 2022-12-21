# 



网址：

```
https://passport.changhong.com/login.do?view=vip&service=http://cn.changhong.com&livemode=1
```

登录的时候密码被加密了：

![image-20221222020417953](README.assets/image-20221222020417953.png)

追踪到是提交登录表单的按钮的事件： 

![image-20221222020356780](README.assets/image-20221222020356780.png)

是个DES加密： 

![image-20221222020320693](README.assets/image-20221222020320693.png)

