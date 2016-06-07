document.getElementById("button_submit").onclick = function () {
	var sheet_url = "https://docs.google.com/a/girlswhocode.com/forms/d/1mv8BgKb8Gx9MywnGfvozmwQfJ8MWy37i6T3rJOWudbc/formResponse"

	var timestamp = Date.now();
	var name = jQuery('#name').val();
	var classroom;
	$('#classroom').on('change', function() {
			classroom = $(this).val();
			console.log(classroom);
			console.log(classroom_names[classroom].text)
		});
	var week;
	$('#week').on('change', function() {
			week = $(this).val();
			console.log(week);
		});
	var workstyles;
	$('#workstyles').on('change', function() {
			workstyles = $(this).val();
			console.log(workstyles);
		});
	var lesson_description = jQuery('#lesson_description').val();
	var gwc_curriculum = $('#gwc_curriculum input:radio:checked').val();
	var teacher_prep = $('#teacher_prep input:radio:checked').val();
	var ta_prep = $('#ta_prep input:radio:checked').val();
	var differentiation = $('#differentiation input:radio:checked').val();
	var check_understanding = $('#check_understanding input:radio:checked').val();
	var planning_comments = jQuery('#planning_comments').val();
	var class_env = $('#class_env input:radio:checked').val();
	var student_wrk = $('#student_wrk input:checkbox:checked').val();
	console.log(student_wrk)
	var platform;
	$('#platforms').on('change', function() {
			platform = $(this).val();
			console.log(platform);
			console.log(platforms[classroom].text)
		});
		


	var data = {
		"entry.0.single": timestamp,
		"entry.1.single": name,
		"entry.2.single": classroom,
		"entry.3.single": week,
		"entry.4.single": workstyles,
		"entry.5.single": lesson_description,
		// "entry.6.single": gwc_curriculum,
		// "entry.7.single": teacher_prep,
		// "entry.8.single": ta_prep,
		// "entry.9.single": differentiation,
		// "entry.9.single": check_understanding,
		// "entry.10.single": planning_comments,
		// "entry.11.single": class_env,
		// "entry.12.single": student_wrk,
		// "entry.13.single": platform,
		// "entry.14.single": platforms_other,
		// "entry.15.single": instruction_comments,
		// "entry.16.single": add_comments,
		// "entry.17.single": intervention
	}

	// $j.ajax({
  //               url: sheet_url,
  //               data: data,
  //               type: "POST",
  //               dataType: "xml",
  //               statusCode: {
  //                   0: function (){
	//
  //                       $j('#name').val("");
  //                       $j('#email').val("");
  //                       $j('#feed').val("");
  //                       //Success message
  //                   },
  //                   200: function (){
  //                       $j('#name').val("");
  //                       $j('#email').val("");
  //                       $j('#feed').val("");
  //                       //Success Message
  //                   }
  //               }
	// 						}
}
