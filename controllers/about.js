"use strict";

// import all required modules
const logger = require("../utils/logger");

// create start object
const about = {
  // index method - responsible for creating and rendering the view
  index(request, response) {
    // display confirmation message in log
    logger.info("about rendering");

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: "Welcome to the Playlist App!"
    };

    // render the start view and pass through the data
    response.render("about", viewData);
  }
};

// export the start module
module.exports = about;
