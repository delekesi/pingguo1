$(function(){
    var $logo1=$(".xx");
    var $li=$(".sousuo1");
    var $logo=$(".ull li:not(.pingguo)");
    var $cang=$(".cang");
    var $input=$(".cang input");
    var $hh=$(".cang h3");
    var $zz=$(".cang ul");
    var $dakai=$(".dakai");
    var $xian=$(".xian");
    var $xian1=$(".xian1");
    var $leb=$(".leb");
    var $nn=window.innerHeight - 44;
    var $mm=window.innerWidth;


   $leb.css({height:$nn + "px"})




    $li.click(function(){
     $logo.css({
         transition: "all .5s",
         transform:"scale(0,0)",


     })
        $logo1.css({
            transition: "all .5s",
            transform:"scale(1,1)",
        })
        $cang.css({
            transition: "all .5s",
            transform:"scale(1,1)",
        })
        $input.css({
            transition: "all 1s",
            transform:"scale(1,1)",
        })
        $hh.css({
            transition: "all 1.2s",
            transform:"scale(1,1)",
        })
        $('.bottom a:nth-child(1)').css({
            transition: "all 1.2s",
            transform:"scale(1,1)",
        })
        $('.bottom a:nth-child(2)').css({
            transition: "all 1.6s",
            transform:"scale(1,1)",
        })
        $('.bottom a:nth-child(3)').css({
            transition: "all 2s",
            transform:"scale(1,1)",
        })
        $('.bottom a:nth-child(4)').css({
            transition: "all 2.4s",
            transform:"scale(1,1)",
        })




    })
    $logo1.click(function(){
     $logo.css({
         transition: "all .5s",
         transform:"scale(1,1)",
     }),
        $cang.fadeIn("fast",function(){
            $cang.css({
                transition: "all .5s",
                transform:"scale(0,0)",
            })
        }),
        $logo.css({
            transition: "all .5s",
            transform:"scale(1,1)",
        }),
         $logo1.css({
             transition: "all .5s",
             transform:"scale(0,0)",
         })
    })

    var num=0;
    $dakai.click(function(){
        
        

        if(num==0){

            num=1;  
            $xian.css({
            marginTop:"-5px",
            transform:"rotate(135deg)"

        })
        $xian1.css({
            marginTop:"0",
            transform:"rotate(45deg)"

        })
        $leb.slideToggle();
        $('.leb1 li:nth-child(1)').css({
            transition: "all .5s",
            transform:"scale(1,1)",
        })
        $('.leb1 li:nth-child(2)').css({
            transition: "all .7s",
            transform:"scale(1,1)"
        })
        $('.leb1 li:nth-child(3)').css({
            transition: "all .9s",
            transform:"scale(1,1)",
        })
        $('.leb1 li:nth-child(4)').css({
            transition: "all 1.1s",
            transform:"scale(1,1)"
        })
        $('.leb1 li:nth-child(5)').css({
            transition: "all 1.3s",
            transform:"scale(1,1)",
        })
        $('.leb1 li:nth-child(6)').css({
            transition: "all 1.5s",
            transform:"scale(1,1)"
        })
        $('.leb1 li:nth-child(7)').css({
            transition: "all 1.7s",
            transform:"scale(1,1)"
        })
         
     
        }else if(num==1){
          
            
                num=0;
            $xian.css({
                marginTop: "-10px",
                transform: "rotate(0deg)"

            })
            $xian1.css({
                marginTop: "10px",
                transform: "rotate(0deg)"

            })
            $leb.slideToggle();
            $('.leb1 li:nth-child(1)').css({
                transition: "all 1.7s",
                transform: "scale(0,0)",
            })
            $('.leb1 li:nth-child(2)').css({
                transition: "all 1.5s",
                transform: "scale(0,0)"
            })
            $('.leb1 li:nth-child(3)').css({
                transition: "all 1.3s",
                transform: "scale(0,0)",
            })
            $('.leb1 li:nth-child(4)').css({
                transition: "all 1.1s",
                transform: "scale(0,0)"
            })
            $('.leb1 li:nth-child(5)').css({
                transition: "all .9s",
                transform: "scale(0,0)",
            })
            $('.leb1 li:nth-child(6)').css({
                transition: "all .7s",
                transform: "scale(0,0)"
            })
            $('.leb1 li:nth-child(7)').css({
                transition: "all .5s",
                transform: "scale(0,0)"
            })
           
         
        

        }

        

       
        })


  
      
       var $hh=$('.hezi1 ul')
       var $hs=$(".hezi1 h3")
       
       $hs.click(function(){
        $hh.eq($hs.index(this)).slideToggle();
       })

       
       






       var $imgs=$('.banner2');

       var $img=$(".ban");
       var num=0;

       t=setInterval(move,2000)

       function move(){
           $imgs.animate({marginLeft:'-$mm'},1000,function(){
               $imgs.css('marginLeft','0');
               $('.banner2 .ban:first').remove().clone(true).appendTo($imgs);
           })
       }
       $('.banner').hover(function(){
           clearInterval(t)
       },function(){
           t=setInterval(move,2000)
       })


       
})
       



   