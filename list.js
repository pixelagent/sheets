<script type="text/javascript">

//standard opening so that the script starts after page is loaded.

$(document).ready(function() {   

//Begin listBooks function.
	$(function listBooks() {   
 
//Begin getJSON function. Make sure the URL has the correct key and ID. Name your div well, you will need it for the html part.  The name you choose for the class will be used in the CSS and therefore can be changed to something meaningful.
		$.getJSON( "https://spreadsheets.google.com/feeds/list/0AuwEG4hnNDDYdDJQR2xZTnJkUVd6RXZINEZKY1VtT3c/od6/public/values?alt=json-in-script&callback=?", function (data) { 
		$('div#philosophy').append('<ul class="items"></ul>');

//Begin data.feed.entry function. This is where you add the Open Library book covers and link to your OPAC,
		$.each(data.feed.entry, function(i,entry) { var

				item = '<span style="display:none">' + entry.id.$t + '</span>';    

				item += '<a href="http://whatcom.library.ctc.edu/vwebv/search?searchArg=' + entry.gsx$isbn.$t + '&searchCode=GKEY^*&limitTo=none&recCount=50&searchType=1&page.search.search.button=Search">' + '<img src="http://covers.openlibrary.org/b/isbn/' + entry.gsx$isbn.$t + '-S.jpg" />' + entry.gsx$callnumber.$t + '</a>';                


				item += '<br/>' + entry.gsx$title.$t;    

           		if (entry.gsx$notes.$t) {item += '<br/>Description: ' + entry.gsx$notes.$t; }  

           	$('.items').append('<li>' + item + '</span></li>'); 
   

   			}); //ends data.feed.entry function 

   			}); //ends getJSON function

			}); //ends listBooks function

			}); //ends document.ready function

</script>
 
