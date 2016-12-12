import $ from 'jquery'

var postNote = (place_id,text)=>{
	"I got to the client side part"
	var data = {place_id:place_id, text:text}
	$.ajax({
	  type: "POST",
	  url: '/postNote',
	  data: JSON.stringify(data),
	  //success: success,
	  contentType: 'application/json'
	});
}

export default postNote;
