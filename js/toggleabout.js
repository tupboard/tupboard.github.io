    $(document).ready(function(){
       $(".blurb").click(function(){
            $(".text1").slideToggle('slow');
            $(".text").slideToggle('slow');
            $(".text2").hide();
            $(".text3").hide();
            $(".text4").hide();
            $(".cal").slideToggle('slow');
            $(".exec").slideToggle('slow');
            $(".events").slideToggle('slow');
            $(".blurb").toggleClass("blue");
            if ($(".blurb").text() == "Vision and Mission") {
                $(".blurb").text("Vision and Mission (back)");
                var text = $(this).text();
                var pos = text.indexOf('(');
                $(this).html(text.slice(0,pos) + '</br>' + text.slice(pos));
            } else {
                $(".blurb").text("Vision and Mission");
            }
          });

       $(".exec").click(function(){
            $(".text1").slideToggle('slow');
            $(".text2").slideToggle('slow');
            $(".text").hide();
            $(".text3").hide();
            $(".text4").hide();
            $(".blurb").slideToggle('slow');
            $(".cal").slideToggle('slow');
            $(".events").slideToggle('slow');
            $(".exec").toggleClass("blue");
            if ($(".exec").text() == "Executive Board") {
                $(".exec").text("Executive Board (back)");
                var text = $(this).text();
                var pos = text.indexOf('(');
                $(this).html(text.slice(0,pos) + '</br>' + text.slice(pos));
            } else {
                $(".exec").text("Executive Board");
            }
       });

       $(".cal").click(function(){
            $(".text1").slideToggle('slow');
            $(".text3").slideToggle('slow');
            $(".text").hide();
            $(".text2").hide();
            $(".text4").hide();
            $(".blurb").slideToggle('slow');
            $(".exec").slideToggle('slow');
            $(".events").slideToggle('slow');
            $(".cal").toggleClass("blue");
            if ($(".cal").text() == "Upcoming Events") {
                $(".cal").text("Upcoming Events (back)");
                var text = $(this).text();
                var pos = text.indexOf('(');
                $(this).html(text.slice(0,pos) + '</br>' + text.slice(pos));
            } else {
                $(".cal").text("Upcoming Events");
            }
       });
       
       $(".events").click(function(){
            $(".text1").slideToggle('slow');
            $(".text4").slideToggle('slow');
            $(".text").hide();
            $(".text2").hide();
            $(".text3").hide();
            $(".blurb").slideToggle('slow');
            $(".exec").slideToggle('slow');
            $(".cal").slideToggle('slow');
            $(".events").toggleClass("blue");
            if ($(".events").text() == "Past Programs") {
                $(".events").text("Past Programs (back)");
                var text = $(this).text();
                var pos = text.indexOf('(');
                $(this).html(text.slice(0,pos) + '</br>' + text.slice(pos));
            } else {
                $(".events").text("Past Programs");
            }
       });
     });