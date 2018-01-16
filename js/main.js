jQuery(document).ready(


function ($) {

        var options = { $AutoPlay: 1 };
      //  var jssor_slider1 = new $JssorSlider$('slider1_container', options);

        var album_req_url = "http://picasaweb.google.com/data/feed/api/user/stevenlaytonphotography?kind=album&access=public&fields=entry%28media:group/media:title,gphoto:numphotos,link[@rel=%27http%3A%2F%2Fschemas.google.com%2Fg%2F2005%23feed%27]%28@href%29%29&alt=json";

       var objex = [];

        $.getJSON( album_req_url, function( data ) {
             var items = [];
            $.each( data.feed.entry, function( key, val ) {
            items.push( "<li id='" + key + "'> key:" + key +" val: " + val + "</li>" );
           
            objex.push(val);

                console.log(val.media$group.media$title.$t); 
                var a_title = val.media$group.media$title.$t;

                if (a_title == 'Slide Show' ) {

                        // get url
                        var a_url = val.link[0].href;
                        console.log(val.link[0].href);

                        $.getJSON(a_url, function(d2) {

                                $.each( d2.feed.entry, function(kk,vv){
                                   var b_url = vv.media$group.media$content[0].url;
                                   console.log(b_url);     
                                });
                                console.log(d2)

                        } );


                }


        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );

        });

});





        /*

        get albums

        get url for each album

        with slideshow album populate slider1_container

        with list of albums make collage of album covers




        */
