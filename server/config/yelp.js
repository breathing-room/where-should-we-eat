const axios = require('axios');
const { API_KEY } = require('./keys').yelp;

// write function for yelp api calls here
const getRestaurants = (query) => {
  // query argument should include the following properties:
    // user lat/lng: --> retrieved from call to google api
      // latitude
      // longitude
    // radius --> part of user preferences or chosen for each new decision?
    // categories --> derived from group/user preferences
    // price --> derived from group/user preferences

  // so something like this:
  // query = {
  //   latitude: user.lat,
  //   longitude: user.lng,
  //   radius: 10000,
  //   categories: 'vegan, italian',
  //   price: '1, 2',
  // }

  // search url should look something like this:
  // https://api.yelp.com/v3/businesses/search?latitude=29.985996800000002&longitude=-90.08414719999999&radius=40000&categories=vegan&limit=5&sort_by=rating&price=1, 2& Authorization=Bearer API_KEY
  
  // destructure vars from query arg obj
  const {
    latitude,
    longitude,
    radius,
    categories,
    price,
  } = query;

  // provide api key
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=${categories}&limit=5&sort_by=rating&price=${price}`;
  // const url = 'https://api.yelp.com/v3/businesses/search?latitude=29.985996800000002&longitude=-90.08414719999999&radius=40000&categories=italian&limit=5&sort_by=rating&price=1, 2& Authorization=BearerQOG7LMVSSI1h9KdCz3VJbbGbJkBe8Qref4Kf4hdOf20UZR8bAAWnHXUJEgRbS25zVg66TMUXgzB3KZVsWjhDX0NznR54MMSnonqXg75jA6Kz8j4mEE4hJBl125EHXnYx';
  return axios.get(url, { headers });
};

// getRestaurants({
//   latitude: 29.985996800000002,
//   longitude: -90.08414719999999,
//   radius: 40000,
//   categories: 'italian',
//   price: '1,2',
// }).then((response) => {
//   console.log(response.data.businesses);
// }).catch(() => {
//   console.log('there was an error');
// });


module.exports.getRestaurants = getRestaurants;

// search params:
// location or lat/lng
// radius: max distance radius (in meters)
// categories: a list of comma-delimited categories that we get from user preferences:
// https://www.yelp.com/developers/documentation/v3/all_category_list
// limit: 5?
// sort_by: rating?
// price: get from user preferences. 1, 2, 3, or 4. can a list
// (i.e. "1, 2, 3" will include restaurants in the $, $$, $$$ ranges)


// To get detailed information and reviews,
// use the Business ID returned from main endpoint with
// /businesses/{id} and /businesses/{id}/reviews endpoints.
// https://www.yelp.com/developers/documentation/v3/get_started
// visit https://www.yelp.com/developers/v3/manage_app?app_created=True to refresh API key
