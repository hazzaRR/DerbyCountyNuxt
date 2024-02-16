import { saveAs } from 'file-saver';

export const downloadMatchesToCSV = async (season, team, stadium, competition, result) => {

    const config = useRuntimeConfig();
    // Define the base URL
    const baseUrl = `${config.public.API_BASE_URL}/api/match/matches.csv`;

    // Create an empty object to store the query parameters
    const queryParams = {};

    // Check if each parameter is selected and add it to the queryParams object if it is
    if (season !== null && season !== "all") {
      queryParams.season = season;
    }

    if (team !== null) {
      queryParams.team = team;
    }

    if (stadium !== null) {
      queryParams.stadium = stadium;
    }

    if (competition !== null) {
      queryParams.competition = competition;
    }

    if (result !== null) {
      queryParams.result = result;
    }

    const queryString = Object.keys(queryParams)
      .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    try {
      const response = await fetch(finalUrl, {
        method: "GET",
        headers: { 
            "Content-Type": "text/csv",
        },
      });

      if (response.status === 200) {

        const blob = await response.blob();

        // Use FileSaver.js to trigger the download
        saveAs(blob, 'matches.csv');
        
        return;
    }

    else {
        return;
    }

    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
}