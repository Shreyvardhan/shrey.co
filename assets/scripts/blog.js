$(function () {
	var $content = $('#blog-container');
	var data = {
		rss_url: 'http://medium.com/feed/@ShreyvardhanSharma'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				// var postCategories = item.categories;
				// if(postCategories.length !== 0 ) {

				// }
				var visibleSm;
				if(k < 4){
					visibleSm = '';
				 } else {
					 visibleSm = ' visible-sm';
				 }
				output += '<div class="story six columns' + visibleSm + '">';
				output += '<span class="blog-date">' + $.format.date(item.pubDate, "dd MMM yyyy") + "</span>";
				output += '<h3 class="blog-title"><a target="_blank" href="'+ item.link + '">' + item.title + '</a></h3>';
				var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
				if (item.title == "A 14 year old’s take on life" || item.title == "Here’s to the crazy ones.") {
					var maxLength = 140 // maximum number of characters to extract
				} else if (item.title == "Staring into Infinity") {
					var maxLength = 110
				} else {
					var maxLength = 150
				}
				//trim the string to the maximum length
				var trimmedString = yourString.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
				output += '<p class="blog-content">' + trimmedString + '...</p>';
				output += '</div>';
				return k < 4;
			});
			$content.html(output);
		}
	});
});