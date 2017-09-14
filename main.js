

var myForm = $('#myForm');
myForm.submit(function (event){
	event.preventDefault();
	var submittedItem = $('#listAdd');
	if (submittedItem.val() === '') {
		alert('Please put something to do!');
	} else {
		var listItem = $("<li></li>");
		listItem.html(submittedItem.val());
		$('ul').append(listItem);
		submittedItem.val('');
		listItem.append('<button class="done">Done</button>');
		listItem.append('<button class="delete">Delete</button>');
	}
});

$('ul').on('click', 'li .done', function (event){
	var $this = $(this);
	$this.closest('li').addClass('complete');
});

$('ul').on('click', 'li .delete', function (event){
	var $this = $(this);
	$this.closest('li').remove();
});