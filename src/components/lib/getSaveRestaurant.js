import React from 'react'

var getSaveRestaurant = (callback) => {
  $.get('/checkList')
  .done((restaurants)=>{
    callback(restaurants.checkList);
  })
  .fail(({responseJSON})=>{
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
}

export default getSaveRestaurant;
