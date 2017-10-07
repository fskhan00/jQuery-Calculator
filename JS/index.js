$(() => {
  $('.btn').click(function (){
    $('#result').val($('#result').val() + $(this).val());
  });

  $('#clear').click(function(){
    $('#result').val('');
  });

  $('#calculate').click(function (){
    $('#result').val(eval($('#result').val()));
  });
});
