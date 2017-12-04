$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
		$("#fade").toggleClass('hide');
	});
	$("#fade").click(function() {
		$('#sidebar').toggleClass('active');
		$("#fade").toggleClass('hide');
	})
});