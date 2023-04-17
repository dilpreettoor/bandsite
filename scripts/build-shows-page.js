const shows = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA"
    },
    {
      date: "Tue Sept 21 2021",
      venue: "Pier 3 East",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Oct 15 2021",
      venue: "View Lounge",
      location: "San Francisco, CA"
    },
    {
      date: "Sat Nov 06 2021",
      venue: "Hyatt Agency",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Nov 26 2021",
      venue: "Moscow Center",
      location: "San Francisco, CA"
    },
    {
      date: "Wed Dec 15 2021",
      venue: "Press Club",
      location: "San Francisco, CA"
    }
  ];
  
  const renderShowsTable = (shows) => {
    const showsContainer = document.querySelector(".shows");
  
    const title = document.createElement("h1");
    title.classList.add("shows__title");
    title.innerText = "Shows";
    showsContainer.appendChild(title);
  
    const table = document.createElement("table");
    table.classList.add("shows__table");
    showsContainer.appendChild(table);
  
    const headerRow = document.createElement("tr");
    headerRow.classList.add("shows__header-row");
    table.appendChild(headerRow);
  
    const dateHeader = document.createElement("th");
    dateHeader.classList.add("shows__header-cell", "shows__header-cell--date");
    dateHeader.innerText = "Date";
    headerRow.appendChild(dateHeader);
  
    const venueHeader = document.createElement("th");
    venueHeader.classList.add("shows__header-cell", "shows__header-cell--venue");
    venueHeader.innerText = "Venue";
    headerRow.appendChild(venueHeader);
  
    const locationHeader = document.createElement("th");
    locationHeader.classList.add("shows__header-cell", "shows__header-cell--location");
    locationHeader.innerText = "Location";
    headerRow.appendChild(locationHeader);
  
    shows.forEach((show) => {
      const row = document.createElement("tr");
      row.classList.add("shows__row");
      table.appendChild(row);
  
      const dateCell = document.createElement("td");
      dateCell.classList.add("shows__cell", "shows__cell--date");
      dateCell.innerText = show.date;
      row.appendChild(dateCell);
  
      const venueCell = document.createElement("td");
      venueCell.classList.add("shows__cell", "shows__cell--venue");
      venueCell.innerText = show.venue;
      row.appendChild(venueCell);
  
      const locationCell = document.createElement("td");
      locationCell.classList.add("shows__cell", "shows__cell--location");
      locationCell.innerText = show.location;
      row.appendChild(locationCell);
  
      const buttonCell = document.createElement("td");
      buttonCell.classList.add("shows__cell", "shows__cell--button");
      row.appendChild(buttonCell);
  
      const button = document.createElement("button");
      button.classList.add("shows__button");
      button.innerText = "Buy Tickets";
      buttonCell.appendChild(button);
    });
  };
  
  renderShowsTable(shows);
  