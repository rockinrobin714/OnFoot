import $ from 'jquery'

var deleteRestaurant = (place_id,name,rating,price_level,vicinity, geometry)=>{
	console.log("Back end deleting beginning!")
	var data = {place_id:place_id, name:name, rating:rating, price_level:price_level, vicinity:vicinity, geometry:geometry}
	console.log("The data to be deleted is", data)
	$.ajax({
	  type: "PUT",
	  url: '/deleteRestaurant',
	  data: JSON.stringify(data),
	  //success: success,
	  contentType: 'application/json'
	});
}

export default deleteRestaurant;