// Create global variables to hold onto the coordinates and the map.
var _dashboard_user_latitude = null;
var _dashboard_user_longitude = null;
var _dashboard_map = null;

/**
 * Implements hook_menu().
 */
function dashboard_menu() {
  try {
    var items = {};
    items['hello_dashboard'] = {
      title: 'Map',
      page_callback: 'dashboard_map',
      pageshow: 'dashboard_map_pageshow'
    };
    return items;
  }
  catch (error) { console.log('dashboard_menu - ' + error); }
}

/**
 * The map page callback.
 */
function dashboard_map() {
  try {
    var content = {};
    var map_attributes = {
      id: 'dashboard_map',
      style: 'width: 100%; height: 320px;'
    };
    content['find_nearby_locations'] = {
  theme: 'button',
  text: 'Cari Order Terdekat',
  attributes: {
    onclick: "_dashboard_map_button_click()",
    'data-theme': 'b'
  }
};
    content['map'] = {
      markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
    };
    content['location_results'] = {
  theme: 'jqm_item_list',
  title: 'Pesanan',
  items: [],
  attributes: {
    id: 'location_results_list'
  }
};
    return content;
  }
  catch (error) { console.log('dashboard_map - ' + error); }
}

/**
 * The map pageshow callback.
 */
function dashboard_map_pageshow() {
  try {
    navigator.geolocation.getCurrentPosition(
      
      // Success.
      function(position) {

        // Set aside the user's position.
        _dashboard_user_latitude = position.coords.latitude;
        _dashboard_user_longitude = position.coords.longitude;
        
        // Build the lat lng object from the user's current position.
        var myLatlng = new google.maps.LatLng(
          _dashboard_user_latitude,
          _dashboard_user_longitude
        );
        
        // Set the map's options.
        var mapOptions = {
          center: myLatlng,
          zoom: 14,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          }
        };
        
        // Initialize the map, and set a timeout to resize it properly.
        _dashboard_map = new google.maps.Map(
          document.getElementById("dashboard_map"),
          mapOptions
        );
        setTimeout(function() {
            google.maps.event.trigger(_dashboard_map, 'resize');
            _dashboard_map.setCenter(myLatlng);
        }, 5000);
        
        // Add a marker for the user's current position.
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: _dashboard_map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        
      },
      
            // Error
      function(error) {
        
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

      },
      
      // Options
      { enableHighAccuracy: true }
      
    );
  }
  catch (error) { console.log('dashboard_map_pageshow - ' + error); }
}

/**
 * The "Find Nearby Locations" click handler.
 */
function _dashboard_map_button_click() {
  try {
    // Build the path to the view to retrieve the results.
    var range = 4; // Search within a 4 mile radius, for illustration purposes.
    var path = 'orders-nearby-locations.json/' +
      _dashboard_user_latitude + ',' + _dashboard_user_longitude;
      
    // Call the server.
    views_datasource_get_view_result(path, {
        success: function(data) {
          
          if (data.nodes.length == 0) {
            drupalgap_alert('Maaf, kami tidak menemukan pesanan di sekitar anda!');
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
                '<p>Kode pesanan: ' + row.title + ', Lokasi pertama: ' + row.field_ofd_from_address +  '</p>';
              //var link = l(image_html + description, 'node/' + row.nid);
              var link = l(description, 'http://gettranz.com/orders/driver/accept/' + row.nid, { InAppBrowser:true });
              items.push(link);
              
              // Add a marker on the map for the location.
              var locationLatlng = new google.maps.LatLng(row.latitude, row.longitude);
              var marker = new google.maps.Marker({
                  position: locationLatlng,
                  map: _dashboard_map,
                  data: row
              });
              
          });
          drupalgap_item_list_populate('#location_results_list', items);

        }
    });
  }
  catch (error) { console.log('_dashboard_map_button_click - ' + error); }
}
