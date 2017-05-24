// Create global variables to hold coordinates and the map.
var _find_eat_nearest_user_latitude = null;
var _find_eat_nearest_user_longitude = null;
var _find_eat_nearest_map = null;
var _last_time = null;
var _marker = null;
var _watch = null;
/**
 * Implements hook_menu().
 */
function find_eat_nearest_menu() {
  try {
    var items = {};
    items['eat_nearest'] = {
      title: 'Get Eat',
      page_callback: 'find_eat_nearest_map',
      pageshow: 'find_eat_nearest_map_pageshow'
    };
    return items;
  }
  catch (error) { console.log('find_eat_nearest_menu - ' + error); }
}

function find_eat_nearest_drupalgap_back(from,to){
    if(from == 'eat_nearest'){
        find_eat_nearest_map_clean_data();
    }
    if(to== 'eat_nearest'){
        if(_watch==null){
            process_eatmap();
            _watch = navigator.geolocation.watchPosition(locationoneatsuccess,geolocationeatonerror,{ maximumAge: 60000, timeout: 60000, enableHighAccuracy: true });
        }
    }
    
}
function find_eat_nearest_drupalgap_goto_post_process(path){
    if(path != 'eat_nearest'){
        find_eat_nearest_map_clean_data();
    }
    else{
        if(_watch==null){
            process_eatmap();        
            _watch = navigator.geolocation.watchPosition(locationoneatsuccess,geolocationeatonerror,{ maximumAge: 60000, timeout: 60000, enableHighAccuracy: true });
        }
    }
}
/**
 * The map page callback.
 */
function find_eat_nearest_map() {
  try {
    var content = {};
    var map_attributes = {
      id: 'find_eat_nearest_map',
      style: 'width: 100%; height: 250px;'
    };
    /*content['find_nearby_locations'] = {
  theme: 'button',
  text: 'Cari Resto Terdekat',
  attributes: {
    onclick: "_find_eat_nearest_map_button_click()",
    'data-theme': 'b'
  }
};*/
    content['map'] = {
      markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
    };
    content['location_results'] = {
  theme: 'jqm_item_list',
  title: 'Restaurants',
  items: [],
  attributes: {
    id: 'location_eat_results_list'
  }
};
  
    return content;
  }
  catch (error) { console.log('find_eat_nearest_map - ' + error); }
}

function find_eat_nearest_map_clean_data(){
    if(_watch != null)
        navigator.geolocation.clearWatch(_watch);
    _find_eat_nearest_map = null;
    _marker = null;
    _last_time = null;
    _watch = null;    
}
/**
 * The map pageshow callback.
 */
function find_eat_nearest_map_pageshow() {    
    
}

function locationoneatsuccess(position){
    // Success.
var d = new Date();
var tmp = d.getTime();
if(_last_time==null) _last_time = tmp;
else{
    if( ((tmp-_last_time)/1000) >300){
        _last_time = tmp;
    }
    else return '';
}
        // Set aside the user's position.
        _find_eat_nearest_user_latitude = position.coords.latitude;
        _find_eat_nearest_user_longitude = position.coords.longitude;
        
        // Build the lat lng object from the user's position.
        var myLatlng = new google.maps.LatLng(
          _find_eat_nearest_user_latitude,
          _find_eat_nearest_user_longitude
        );
        
        // Set the map's options.
        var mapOptions = {
          center: myLatlng,
          zoom: 11,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          }
        };
        
        // Initialize the map, and set a timeout to resize properly.
        if(_find_eat_nearest_map == null)
        _find_eat_nearest_map = new google.maps.Map(
          document.getElementById("find_eat_nearest_map"),
          mapOptions
        );
        setTimeout(function() {
            google.maps.event.trigger(_find_eat_nearest_map, 'resize');
            _find_eat_nearest_map.setCenter(myLatlng);
        }, 500);
        
        // Add a marker for the user's current position.
        if(_marker == null){
            _marker = new google.maps.Marker({
                position: myLatlng,
                map: _find_eat_nearest_map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
            });
        }
        else
            _marker.setPosition(myLatlng);
        
       _find_eat_nearest_map_button_click();
         
}

function geolocationeatonerror(error){
    // Error
        
        // Provide debug information to developer and user.
        console.log(error);
        drupalgap_alert(error.message);
        
        // Process error code.
        switch (error.code) {

          // PERMISSION_DENIED
          case 1:
            break;

          // POSITION_UNAVAILABLE
          case 2:
            break;

          // TIMEOUT
          case 3:
            break;

        }

}
function process_eatmap(){
    try {
        
    navigator.geolocation.getCurrentPosition(
      locationoneatsuccess
      ,
      geolocationeatonerror
      ,
      
      // Options
      { enableHighAccuracy: true }
      
    );
  }
  catch (error) {
    console.log('find_eat_nearest_map_pageshow - ' + error);
  }
}
/**
 * The "Find Nearby Locations" click handler.
 */
function _find_eat_nearest_map_button_click() {
  try {
    // Build the path to the view to retrieve the results.
    var range = 5; // Search within a 4 mile radius, for illustration purposes.
    var path = 'merchants-eatnearbyjson/' +
      _find_eat_nearest_user_latitude + ',' + _find_eat_nearest_user_longitude;
      
    // Call the server.
    views_datasource_get_view_result(path, {
        success: function(data) {
          
          if (data.nodes.length == 0) {
            var items = [];
            drupalgap_item_list_populate("#location_eat_results_list", items);
            drupalgap_alert('Maaf, tidak ada restaurant ditemukan!');            
            return;
          }

          // Iterate over each spot, add it to the list and place a marker on the map.
          var items = [];
          $.each(data.nodes, function(index, object) {
              
              // Render a nearby location, and add it to the item list.
              var row = object.node;
              //var image_html = theme('image', { path: row.field_image.src });
              var distance =
                row.field_geofield_distance + ' ' +
                drupalgap_format_plural(row.field_geofield_distance, 'km', 'kilometers');
              var description =
                '<h2>' + distance + '</h2>' +
               '<p>' + row.namavendor + '<br>' +
               row.alamat + '<br>' +
                row.phone + ' ' + row.hp + '</p>' ;
              var link = l(description, 'eatjson/' + row.uid);
              items.push(link);
              
              // Add a marker on the map for the location.
              var locationLatlng = new google.maps.LatLng(row.latitude, row.longitude);
              var marker = new google.maps.Marker({
                  position: locationLatlng,
                  map: _find_eat_nearest_map,
                  data: row
              });
              
          });
          drupalgap_item_list_populate("#location_eat_results_list", items);

        }
    });
  }
  catch (error) { console.log('_find_eat_nearest_map_button_click - ' + error); }
}