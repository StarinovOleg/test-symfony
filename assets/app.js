/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
const $ = require('jquery');
require('jquery-rss'); 
require('jquery-ui/ui/widgets/datepicker.js');
$("#rss-feeds").rss("https://vnexpress.net/rss/suc-khoe.rss",{limit:20,offsetStart:false, offsetEnd:false});

/*
$("#rss-left").rss("https://vnexpress.net/rss/suc-khoe.rss",{
	  layoutTemplate: "<ul>{entries}</ul>",
	  entryTemplate: "<li>[{date}]{title}</li>"
})*/


$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

  $('#submit').on('click', function(){
    var val = document.getElementById('from').value;
    var val1 = document.getElementById('to').value;
    
    var xml = $("#rss-left").rss("https://vnexpress.net/rss/suc-khoe.rss");
    
      console.log(xml);

  })
  

