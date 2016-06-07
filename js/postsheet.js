document.getElementById("button_submit").onclick = function () {
	var sheet_url = "https://docs.google.com/a/girlswhocode.com/forms/d/1mv8BgKb8Gx9MywnGfvozmwQfJ8MWy37i6T3rJOWudbc/formResponse"
	"https://docs.google.com/a/girlswhocode.com/forms/d/1mv8BgKb8Gx9MywnGfvozmwQfJ8MWy37i6T3rJOWudbc/viewform?embedded=true"
	"https://docs.google.com/spreadsheets/d/1mCQyX57RJAiqa2VHhW7WX5JxKtJUyxtS-QRyJaeedc4/edit?usp=sharing"

	var timestamp = new Date();
	console.log(timestamp)
	var name = jQuery('#name').val();
	console.log(name);

	console.log(classroom);

	console.log(week);

	var workstyle = '';
	for(i=0; i<workstyle_temp.length; i++){
		workstyle += workstyles[workstyle_temp[i]].text;
		if(i != workstyle_temp.length - 1){
			workstyle += ", ";
		}
	}
	console.log(workstyle);
	var lesson_description = jQuery('#lesson_description').val();
	console.log(lesson_description);
	var gwc_curriculum = $('#gwc_curriculum input:radio:checked').val();
	var teacher_prep = $('#teacher_prep input:radio:checked').val();
	var ta_prep = $('#ta_prep input:radio:checked').val();
	var differentiation = $('#differentiation input:radio:checked').val();
	var check_understanding = $('#check_understanding input:radio:checked').val();
	var planning_comments = jQuery('#planning_comments').val();
	var class_env = $('#class_env input:radio:checked').val();
	showSelectedValues();


	console.log(student_wrk)

	var platform = '';
	for(i=0; i<platform_temp.length; i++){
		platform += platforms[platform_temp[i]].text;
		if(i != platform_temp.length - 1){
			platform += ", ";
		}
	}
	console.log(platform)

	var platforms_other = jQuery('#platforms_other').val();
	var instruction_comments = jQuery('#instruction_comments').val();
	var add_comments = jQuery('#add_comments').val();
	var intervention = $('#intervention input:radio:checked').val();
	var data = {
		// "entry.0": timestamp,
		"entry.720426743": name,
		"entry.519727649": classroom,
		"entry.1832963573": week.toString(),
		"entry.228496544": workstyle,
		"entry.228496544": "Other",
		"entry.1744508762": lesson_description,
		"entry.796334582": gwc_curriculum.toString(),
		"entry.696472251": teacher_prep,
		"entry.912888272": ta_prep,
		"entry.512535547": differentiation,
		"entry.1751974744": check_understanding,
		"entry.1271491868": planning_comments,
		"entry.1499365555": class_env,
		"entry.1404500791": student_wrk,
		"entry.1998386258": platform,
		"entry.915932861": platforms_other,
		"entry.1382768139": instruction_comments,
		"entry.1062515501": add_comments,
		"entry.1355691636": intervention
	}


	console.log(data)


	jQuery.ajax({
                url: sheet_url,
                data: data,
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){

                        console.log("success 1")
                        //Success message
                    },
                    200: function (){
                        console.log("success 2")
                        //Success Message
                    }
                }
							});
}
