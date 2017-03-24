$(document).ready(function()
{
/* 1.图片切换模块 */
    $("#button1").click(function()
    {
         $("#background2").fadeIn("slow");
         $("#background1").fadeOut("slow");
    });
    $("#button2").click(function()
    {
         $("#background1").fadeIn("slow");
         $("#background2").fadeOut("slow");
    });
/*--------------------------------------------------------------------------------------------------*/

/*2.针对input标签的按下“enter”光标跳至下一个input标签的js代码，注意类型为hidden的input标签 有此类标签存在的话，会造成光标跳值该标签，但是因为其实隐藏的，无法再执行按下“enter"的操作*/
    $("input:text:first").focus();
    var $inp = $('input');
    $inp.bind('keydown', function (e) //e是指事件keydown本身的jq对象，而$(this)是指这个事件对象的元素的jq对象
    {
        var key = e.which;//等效于 keyCode == 13
        if (key == 13)
        {
            if(this.type == "button")
                login_submit(); //调用函数login_submit
            else
            {
                e.preventDefault();//忽略原来的事件的效果
                var nxtIdx = $inp.index(this) + 1;
                $("input:eq(" + nxtIdx + ")").focus();//eq方法使用的是sizzle选择器，所以其参数形式要用+ 变量性 +,eq用于缩小集合的范围，通过索引值，例如该代码就是缩小所有input标签的元素范围，定位到索引值为nxIdx的那个input标签，这个索引值是相对的，第一个input标签的索引值为0.
            }
        }
     });
/*--------------------------------------------------------------------------------------------------*/

/*3.按下“登录”按钮,校验账户密码，验证码不能为空,并且sumbit的自定义函数模块*/
    function login_submit()
    {
            if($("#username_id").val() ==''||$("#password_id").val() ==''||$("#verify_code").val() =='')
                $("#error_msg").html("用户名和密码不能为空,验证码为4位");
            else
                $("form").submit();
    };
/*--------------------------------------------------------------------------------------------------*/

   /*4. "登录"按钮的click事件调动函数login_submit */
    $("#login_submit").click(function()
    {
        login_submit()
    });
/*--------------------------------------------------------------------------------------------------*/
    /*5.点击验证码图片，使用ajax局部刷新重新获取验证码*/
    $("#verify_code_img").click(function()
    {
        var api_captcha = "{{ api_captcha }}" /* js调用django的变量，不能直接使用，要js自己定义一个变量，然后用django的便来赋值给他*/
        $.get("/api/captcha",function() /*get方法的第一个参数是url，定义请求的地址*/
        {
            $("#verify_code_img").attr('src','/api/captcha');

        });
    });

/*--------------------------------------------------------------------------------------------------*/
});
