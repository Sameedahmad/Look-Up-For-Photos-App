function SearchPhotos() {
  let clientId = "vE711J022D9jeYCQUola3SF_T-6GEZumRZ3rKoDBdkc";
  let query = document.getElementById("search").value;
  let url =
    "https://api.unsplash.com/search/photos/?client_id=" +
    { clientId } +
    "&query" +
    { query };

  // make a request:

  return fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

export default SearchPhotos;
