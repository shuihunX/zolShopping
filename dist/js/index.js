$(function() {

    $("a").mouseenter(function() {
        $(this).css("color", "red").siblings().css("color", "#474747");
    }).mouseleave(function() {
        $(this).css("color", "#474747");
    })

    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 44104
    }, data => {
        console.log(data.data);

        let html = "";
        data.data.forEach(v => {
            html +=
                `<li class="proList_li">
                <a href="detail.html?product_id=${v.pid}">
                <div class="proImg"><img src="${v.pimg}" alt=""></div>
                    <p class="proName">${v.pname}</p>
                    <p class="price">￥${v.pprice}</p>
                </a>
            </li> `
        });
        console.log($(".proList"))
        $('.proList').html(html)
    })




    /* 导航 + 轮播图 + 会员登录 */
    /* 导航列表 */
    /*  $("main-nav_list").children().children().mouseenter(function() {
         $(this).css("color", "red").siblings().css("color", "#474747");
     }).mouseleave(function() {
         $(this).css("color", "#474747");
     }) */



})