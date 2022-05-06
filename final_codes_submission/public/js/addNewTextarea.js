function addNewTextarea()
{
	if($('.addNewPara').is(":checked"))   {
		$('.dynamicTextarea').append('<div><textarea class="form-control mb-3" id="description" name="historicsite[description][]"></textarea></div>');
		$('.addNewPara').prop('checked', false);
	} 
}
