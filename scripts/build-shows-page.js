renderShowsTable = (shows) => {
  const showsContainer = document.querySelector(".shows__container-all");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("shows__title-container");
  showsContainer.appendChild(titleContainer);

  const title = document.createElement("h1");
  title.classList.add("shows__title");
  title.innerText = "Shows";
  titleContainer.appendChild(title);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("shows__table-container");
  showsContainer.appendChild(tableContainer);

  const table = document.createElement("div");
  table.classList.add("shows__table");
  tableContainer.appendChild(table);

  const heading = document.createElement("div");
  heading.classList.add("shows__heading");
  table.appendChild(heading);

  const headingRow = document.createElement("div");
  headingRow.classList.add("shows__row");
  heading.appendChild(headingRow);

  const dateHeader = document.createElement("span");
  dateHeader.classList.add("shows__field--date");
  dateHeader.innerText = "Date";
  headingRow.appendChild(dateHeader);

  const venueHeader = document.createElement("span");
  venueHeader.classList.add("shows__field--venue");
  venueHeader.innerText = "Venue";
  headingRow.appendChild(venueHeader);

  const locationHeader = document.createElement("span");
  locationHeader.classList.add("shows__field--location");
  locationHeader.innerText = "Location";
  headingRow.appendChild(locationHeader);


  shows.forEach((show) => {
    const oneContainer = document.createElement("div");
    oneContainer.classList.add("shows__one-container");
    table.appendChild(oneContainer);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("shows__date-container");
    oneContainer.appendChild(dateContainer);

    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__date-header");
    dateHeader.innerText = "DATE";
    dateContainer.appendChild(dateHeader);

    const date = document.createElement("p");
    date.classList.add("shows__date");
    const dateObj = new Date(show.date);
    date.innerText = dateObj.toLocaleDateString();
    dateContainer.appendChild(date);

    const venueContainer = document.createElement("div");
    venueContainer.classList.add("shows__venue-container");
    oneContainer.appendChild(venueContainer);

    const venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__venue-header");
    venueHeader.innerText = "VENUE";
    venueContainer.appendChild(venueHeader);

    const venue = document.createElement("p");
    venue.classList.add("shows__venue");
    venue.innerText = show.place;
    venueContainer.appendChild(venue);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("shows__location-container");
    oneContainer.appendChild(locationContainer);

    const locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__location-header");
    locationHeader.innerText = "LOCATION";
    locationContainer.appendChild(locationHeader);

    const location = document.createElement("p");
    location.classList.add("shows__location");
    location.innerText = show.location;
    locationContainer.appendChild(location);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows__button-container");
    oneContainer.appendChild(buttonContainer);

    const button = document.createElement("button");
    button.classList.add("shows__button");
    button.innerText = "BUY TICKETS";
    buttonContainer.appendChild(button);
  });
};

const showApi = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=dilpreetbandsite"
);
showApi.then((response) => {
  renderShowsTable(response.data);
  console.log(response.data);
});
showApi.catch((error) => {
  console.log("Woops: " + error.message);
});
