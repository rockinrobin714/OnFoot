import React, { Component } from 'react';
import './css/Item.css';
import postRestaurant from './lib/postRestaurant.js';
import NotesModal from './NotesModal'



class SavedItem extends Component {
  constructor (props) {
    super(props)
    this.state = {};
  }

  delete(){
    this.props.deleteFromSavedList(this.props.item);
  }
  
  // this function turns `item.price_level` into a dollar sign level
  starRating(){
    let score =this.props.item.rating;
    let str=''
    for (let i=0;i<Math.floor(score);i++){
      str+='★';
    }
    return str;
  }
  priceLevel() {
    var result = '';
    for (var i = 0; i < this.props.item.price_level; i++) {
      result += '$';
    }
    return result;
  }

render(){
   // variable string for link to Google maps directions
  let queryStr = "https://www.google.com/maps?saddr=My+Location&daddr=" + this.props.item.geometry.location.lat + "," + this.props.item.geometry.location.lng + "&dirflg=w"
  //get the latitude and longtitude of a restaurant
  var geolocation = `${this.props.item.geometry.location.lat},${this.props.item.geometry.location.lng}`;
  //url for google street view api
  var url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${geolocation}&key=${this.props.API}`
  
    return (
    <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className='list-location-cont'>
      <span className="ribbon icon"><a href="/fav" title="title">{this.props.item.rating} {this.starRating()}, {this.priceLevel()}</a></span>
        <div className='list-location-info'>
          <img className="list-location-img" src={url} alt="Photo of a restaurant" />
          <div>
            <h3>{this.props.item.name}</h3>
            <p className='list-location-address'>{this.props.item.vicinity}</p>
            <a className='list-location-button' target='_blank' href={queryStr}>Get Map</a>

            <button className='list-location-button' onClick={this.delete.bind(this)}>Delete from saved list</button>
          </div>
        </div>
      </div>    
    </li>
    );
  }
};

//Once functionality works --> <NotesModal addNote={this.props.addNote} item={this.props.item}/>
export default SavedItem;
