function calcscore(){
// console.log($("input:radio[name='radio1']").prop('checked')); // true

    $(function(){
      var score = 0;
      var kai1 =  $("input[name='radio1']:checked").val();
      var kai2 =  $("input[name='radio2']:checked").val();
      var kai3 =  $("input[name='radio3']:checked").val();
      var kai4 =  $("input[name='radio4']:checked").val();
      var kai5 =  $("input[name='radio5']:checked").val();
      var kai6 =  $("input[name='radio6']:checked").val();
      var kai7 =  $("input[name='radio7']:checked").val();
      var kai8 =  $("input[name='radio8']:checked").val();
      var kai9 =  $("input[name='radio9']:checked").val();
      var kai10 =  $("input[name='radio10']:checked").val();

      if(kai1 !=(undefined)){
        $("#ask1").remove();
      };
      if(kai2 !=(undefined)){
        $("#ask2").remove();
      };
      if(kai3 !=(undefined)){
        $("#ask3").remove();
      };
      if(kai4 !=(undefined)){
        $("#ask4").remove();
      };
      if(kai5 !=(undefined)){
        $("#ask5").remove();
      };
      if(kai6 !=(undefined)){
        $("#ask6").remove();
      };
      if(kai7 !=(undefined)){
        $("#ask7").remove();
      };
      if(kai8 !=(undefined)){
        $("#ask8").remove();
      };
      if(kai9 !=(undefined)){
        $("#ask9").remove();
      };
      if(kai10 !=(undefined)){
        $("#ask10").remove();
      };

      $(".calc:checked").each(function(){
    score+=parseInt($(this).val(),10);
});
    //document.location.reload();

      if(score >= 80 && kai1 !=(undefined) && kai2 !=(undefined) && kai3 !=(undefined) && kai4 !=(undefined) && kai5 !=(undefined) && kai6 !=(undefined) && kai7 !=(undefined) && kai8 !=(undefined) && kai9 !=(undefined) && kai10 !=(undefined)){
        $(".container a").attr("href", "nd-check8-10.html");
        $(".container a").addClass("btn-animation-02");
        $('.container span').text('回　答');
      } else if(score >= 50 && kai1 !=(undefined) && kai2 !=(undefined) && kai3 !=(undefined) && kai4 !=(undefined) && kai5 !=(undefined) && kai6 !=(undefined) && kai7 !=(undefined) && kai8 !=(undefined) && kai9 !=(undefined) && kai10 !=(undefined)){
        $(".container a").attr("href", "nd-check5-7.html");
        $(".container a").addClass("btn-animation-02");
        $('.container span').text('回　答');
      } else if(score >= 0 && kai1 !=(undefined) && kai2 !=(undefined) && kai3 !=(undefined) && kai4 !=(undefined) && kai5 !=(undefined) && kai6 !=(undefined) && kai7 !=(undefined) && kai8 !=(undefined) && kai9 !=(undefined) && kai10 !=(undefined)){
        $(".container a").attr("href", "nd-check0-4.html");
        $(".container a").addClass("btn-animation-02");
        $('.container span').text('回　答');
      }
      else{

      }

    });
};
$().ready(function(){
    $(".calc").change(function(){
        calcscore();
    });
});
////////////////////////////////////////////////////////

  $('input[name="radio1"]:radio').change(function(){
    $('#TAB-01').removeAttr('checked');
    $('#TAB-02').prop("checked",true);
  });

  $('input[name="radio2"]:radio').change(function(){
    $('#TAB-02').removeAttr('checked');
    $('#TAB-03').prop("checked",true);
  });

  $('input[name="radio3"]:radio').change(function(){
    $('#TAB-03').removeAttr('checked');
    $('#TAB-04').prop("checked",true);
  });

  $('input[name="radio4"]:radio').change(function(){
    $('#TAB-04').removeAttr('checked');
    $('#TAB-05').prop("checked",true);
  });

  $('input[name="radio5"]:radio').change(function(){
    $('#TAB-05').removeAttr('checked');
    $('#TAB-06').prop("checked",true);
  });

  $('input[name="radio6"]:radio').change(function(){
    $('#TAB-06').removeAttr('checked');
    $('#TAB-07').prop("checked",true);
  });

  $('input[name="radio7"]:radio').change(function(){
    $('#TAB-07').removeAttr('checked');
    $('#TAB-08').prop("checked",true);
  });

  $('input[name="radio8"]:radio').change(function(){
    $('#TAB-08').removeAttr('checked');
    $('#TAB-09').prop("checked",true);
  });

  $('input[name="radio9"]:radio').change(function(){
    $('#TAB-09').removeAttr('checked');
    $('#TAB-10').prop("checked",true);
  });

////////////////////////////////////////////////////////
