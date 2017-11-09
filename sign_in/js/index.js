$(function(){
    var wall=$(".photo_wall");
    var item_width=23;
    var no=[
        [1,2,3,4,5,6,7,8,9,10,11,18,19,20,21,22,23,24,25,26,27,28],
        [1,2,3,4,5,6,7,8,21,22,23,24,25,26,27,28],
        [1,2,3,4,5,23,24,25,26,27,28],
        [1,2,3,4,5,24,25,26,27,28],
        [1,2,3,4,17,18,25,26,27,28],
        [1,2,3,16,17,18,19,20,26,27,28],
        [1,2,15,16,17,18,19,20,27,28],
        [1,2,14,15,16,17,18,19,20,21,27,28],
        [1,13,14,15,16,17,18,19,20,21,28],
        [1,12,13,14,15,16,17,18,19,20,21],
        [1,11,12,13,16,17,18,19,20],
        [10,11,12,13,16,17,18,19,20,27,28],
        [9,10,11,12,17,18,19,24,25,26,27,28],
        [7,8,9,10,19,22,23,24],
        [6,7,10,19,20,21,22],
        [1,2,3,4,5,6,10,11,12,17,18,19,20],
        [1,2,9,10,11,12,13,16,17,18,19],
        [9,10,11,12,13,16,17,18,28],
        [8,9,10,11,12,13,14,15,16,17,28],
        [1,8,9,10,11,12,13,14,15,16,28],
        [1,2,8,9,10,11,12,13,14,15,27,28],
        [1,2,9,10,11,12,13,14,27,28],
        [1,2,3,9,10,11,12,13,14,26,27,28],
        [1,2,3,4,11,12,25,26,27,28],
        [1,2,3,4,5,24,25,26,27,28],
        [1,2,3,4,5,6,23,24,25,26,27,28],
        [1,2,3,4,5,6,7,8,21,22,23,24,25,26,27,28],
        [1,2,3,4,5,6,7,8,9,10,11,18,19,20,21,22,23,24,25,26,27,28]
    ];
    var colorflag=true;
    for(var i=0;i<28;i++){
        colorflag=!colorflag;
        var z=0;
        for(var j=0;j<28;j++){
            colorflag=!colorflag;
            if((j+1)==no[i][z]){
                z++;
                $("<div class='wall_item'></div>").appendTo($(".photo_wall"));
            }else{
                if(colorflag){
                    $("<div class='wall_item c1'><img class='wall_img'></div>").appendTo($(".photo_wall"));
                }else{
                    $("<div class='wall_item c2'><img class='wall_img'></div>").appendTo($(".photo_wall"));
                }
            }
        }
    }
    wall.css({
        width:item_width*28,
        height:item_width*28
    });
    $(".wall_item").css({
        width:item_width,
        height:item_width
    });
    var img_index=0;
    var img_old=[];
    var imgs=$(".wall_img");
    var ins;
    function index(){
        if(img_old.length>=imgs.length){
            img_old=[];
        }
        var index_flag=true;
        ins=Math.floor(Math.random()*imgs.length);
        for(var i in img_old){
            if(ins==img_old[i]){
                index_flag=false;
                index();
            }
        }
        if(index_flag){
            img_old.push(ins);
        }
        return ins;
    }

    $("button").click(function(){
        img_index = index();

        var src = "http://xzsydc.duapp.com/uploadfile/photo/" + Math.ceil(Math.random() * 98) + ".jpg";
        var j = img_index;
        $("<div class='pop pop" + img_index + "'><img src=" + src + " alt=''><p>moumoumou上线了，，，</p></div>").appendTo($(".photo_wall"));
        console.log(img_index)
        var top = imgs.eq(img_index).position().top;
        var left = imgs.eq(img_index).position().left;
        $(".pop").css({left: Math.ceil(Math.random() * 2000 - 400)});
        $(".pop" + img_index).animate({top: top, left: left, opacity: 0.2}, 1500, function () {
            imgs.eq(j).attr("src", src);
            $(this).remove();
        });
    });

//var ws=new WebSocket("ws://127.0.0.1:2000");
//     ws.onopen=function(){
//         console.log("已经建立连接");
//         ws.send("hello dc");
//     }
//     ws.onmessage=function(e){
//         console.log(e.data);
//     }
    var arr_index=0;
    var arr=[];
    var t=setInterval(function(){
        img_index = index();

        var src = "http://xzsydc.duapp.com/uploadfile/photo/" + Math.ceil(Math.random() * 98) + ".jpg";
        var j = img_index;
        $("<div class='pop pop" + img_index + "'><img src=" + src + " alt=''></div>").appendTo($(".photo_wall"));
        // $("<div class='pop pop" + img_index + "'><img src=" + src + " alt=''><p>moumoumou上线了，，，</p></div>").appendTo($(".photo_wall"));
        console.log(img_index)
        var top = imgs.eq(img_index).position().top;
        var left = imgs.eq(img_index).position().left;
        $(".pop").css({left: Math.ceil(Math.random() * 2000 - 400)});
        $(".pop" + img_index).animate({top: top-15, left: left, opacity: 1}, 1500, function () {
            imgs.eq(j).attr("src", src);
            $(this).find("img").animate({width:23},600,function(){
                $(this).parent().remove();
            });
        });
        arr_index++;
        if(arr_index==arr.length){
            clearInterval(t);
        }
    },3000);

});