/**
 *向模板中填充属性值
 */
function setValue() {
	if ($("#rowPorName").val().replace(/\s*/g, "") == "" || $("#rowPorVal").val().replace(/\s*/g, "") == "") {
		alert("属性名或属性值不能为空");
		return false;
	} else {
		var testName = $("#rowPorName").val(),
			testVal = $("#rowPorVal").val(),
			thisNew = true;

		//检查是否有此属性；
		$("#thisBefore li").each(function() {
			if ($(this).find(".addListName").html() == testName) {
				thisNew = false;
				var thisList = true;
				var li = $(".addListName:contains('" + testName + "')").closest("li");
				//若有此属性则检查是否有该值
				li.find("select option").each(function() {
						if ($(this).val() == testVal) {
							thisList = false;
						}
					})
					//若该属性没有此值则添加；
				if (thisList) {
					li.find("select").append("<option>" + testVal + "</option>");
				}
			}
		});
		//无此属性则添加；
		if (thisNew) {
			$("#thisBefore").append('<li> \
					<span class="addListName">' + testName + '</span>\
					<select style="width:calc(5rem + 18px)">\
					<option>' + testVal + '</option>\
					</select><span class="delete_select" style="font-size:12px;vertacil-align:bottom;padding:0 5px">删除</span>\
				</li>');
		}
	}
}

//删除添加类
$(".delete_select").live("click", function() {
	$(this).closest("li").remove();
})

$(function() {
	//添加属性值事件；
	$(".addSPE").click(function() {
		var NewSpe = true,
			val = $("#SPE_value").val();
		//值未填写时，不执行；
		console.log(1);
		if (val.replace(/\s*/g, '') == "") return;
		//检查是否已添加该值；
		$(".SPE_div .SPE_value").each(function() {
				console.log(2);
				//若已添加该值，则放弃添加；
				if ($(this).find("em").html() == val) {
					NewSpe = false;
				}
			})
			//若未添加该值；则添加；
		if (NewSpe) {
			$(".SPE_div .clear").before("<span class='SPE_value'><input type='checkbox'><em>" + val + "</em><i>x</i></span>");
		}
	})

	//确定添加
	$("#btn11").click(function() {
		var newTitle = true;
		if ($(".SPE_div").html().replace(/\s*/g, "") == '<divclass="clear"></div>') return;
		$("#addTable1 li").each(function() {
			//若已有该属性；
			if ($(this).find("h3 span").html() == $("#SPE_name").val()) {
				newTitle = false;
				var main_len = $(this).find(".SPE_value").length,
					spe_val_len = $(".SPE_div .SPE_value").length;
				//检查是否有该值；
				for (var i = 0; i <= spe_val_len; i++) {
					for (var j = 0; j <= main_len; j++) {

						//若已有该值，则丢弃；
						if ($(this).find(".SPE_value").eq(j).find("em").html() == $(".SPE_div .SPE_value").eq(i).find("em").html()) {
							$(".SPE_div .SPE_value").eq(i).remove();
						}
					}
				}
				//添加至对应属性；
				$(".SPE_div").find(".clear").remove();

				$(this).find(".clear").before($(".SPE_div").html());
			}
		})

		//若没有该值；则添加该值
		if (newTitle) {
			console.log(newTitle);
			$("#addTable1").append("<li><h3 style='padding:0;margin:0'> <span>" + $("#SPE_name").val() + "</span><em class='delete_select'>x</em></h3><main>" + $(".SPE_div").html() + "</main></li>");
		}
		$(".SPE_div").html("<div class='clear'></div>");
		$("#SPE_name,#SPE_value").val("");
	})

	//删除选项
	$(".SPE_value i").live("click", function() {
		$(this).closest(".SPE_value").remove();
	})

	$(".reset_val").click(function() {
		$(".SPE_div").html("<div class='clear'></div>");
		$("#SPE_name,#SPE_value").val("");
	})

})