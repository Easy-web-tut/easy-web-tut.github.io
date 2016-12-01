
$('.col-md-6 #codecontainer div').hide();
$('.col-md-6 #hu___hu___').show();
$('.col-md-6 #GShu___hu___').show();

$(function(){
    // change animation with on change DropDown
    $('#selectAnimation').change(function(){
		var getClass = $('#selectAnimation :selected').val();
		$('.cssanimation').attr('class', '').addClass('cssanimation' + ' ' + getClass);
		$('.hljs-string').html('\"cssanimation' + ' ' + getClass +'\"');

		$('.col-md-6 #codecontainer div').hide();
    $('.col-md-6 #' + getClass).show();
		$('.col-md-6 #' +'GS'+ getClass).show();

    });

    // Replay Button
    $("#replay").click(function(){
      var className = $('.cssanimation').attr('class');
      $('.cssanimation').removeClass(className);
      $('.animationPreview h1').delay(50).queue(function(){
      $(this).addClass(className).clearQueue();
      });
    });

    //  Next Button
    document.getElementById("nextBtn").onclick = function nextBtnClass() {
		var nextSel = document.getElementById('selectAnimation');
		var i = nextSel.selectedIndex;
		nextSel.options[++i%nextSel.options.length].selected = true;
		var getClass = $('#selectAnimation :selected').val();
		$('.cssanimation').attr('class', '').addClass('cssanimation' + ' ' + getClass);
		$('.hljs-string').html('\"cssanimation' + ' ' + getClass +'\"');

		$('.col-md-6 #codecontainer div').hide();
    $('.col-md-6 #' + getClass).show();
		$('.col-md-6 #' +'GS'+ getClass).show();
    };

    //  Previous Button
     document.getElementById("previousBtn").onclick = function previousBtnClass() {
		var preSel = document.getElementById('selectAnimation');
		var j = preSel.selectedIndex;
		preSel.options[--j%preSel.options.length].selected = true;
		var getClass = $('#selectAnimation :selected').val();
		$('.cssanimation').attr('class', '').addClass('cssanimation' + ' ' + getClass);
		$('.hljs-string').html('\"cssanimation' + ' ' + getClass +'\"');

		$('.col-md-6 #codecontainer div').hide();
    $('.col-md-6 #' + getClass).show();
		$('.col-md-6 #' +'GS'+ getClass).show();
    };
  });

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
