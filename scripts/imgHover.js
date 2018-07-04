
/* 滑过图片出现放大镜效果 */
$(function() {
	$("#jnBrandList li img").last().on("load", function() {
		img_w = $(this)[0].width;
		img_h = $(this)[0].height;

		$("#jnBrandList li").each(function(index) {
			var spanHtml = '<span style="position:absolute;top:0;left:5px;width:' + img_w + 'px;height:' + img_h + 'px;" class="imageMask"></span>';
			console.log(spanHtml);
			$(spanHtml).appendTo(this);
		})
	});

	$('#jnBrandList').on('mouseenter', '.imageMask', function() {
		//alert('test')
		$(this).toggleClass("imageOver");
	});

	$('#jnBrandList').on('mouseleave', '.imageMask', function() {
		//alert('test')
		$(this).toggleClass("imageOver");
	});

})