// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://streaming-availability.p.rapidapi.com/search/title',
//   params: {
//     title: '<REQUIRED>',
//     country: '<REQUIRED>',
//     show_type: 'all',
//     output_language: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'd495d91ecemsh72ffbfc21048f7cp159b8ajsn8142c6b4a7d2',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://streaming-availability.p.rapidapi.com/search/title?title=%3CREQUIRED%3E&country=%3CREQUIRED%3E&show_type=all&output_language=en');
xhr.setRequestHeader('X-RapidAPI-Key', 'd495d91ecemsh72ffbfc21048f7cp159b8ajsn8142c6b4a7d2');
xhr.setRequestHeader('X-RapidAPI-Host', 'streaming-availability.p.rapidapi.com');

xhr.send(data);