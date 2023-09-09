export const getFixtureTeams = async (competition) => {

    const config = useRuntimeConfig();
    // Define the base URL
    const baseUrl = `${config.public.API_BASE_URL}/api/fixtures/teams`;

    // Create an empty object to store the query parameters
    const queryParams = {};

    // Check if each parameter is selected and add it to the queryParams object if it is
    if (competition !== null) {
      queryParams.competition = competition;
    }

    const queryString = Object.keys(queryParams)
      .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    try {
      const response = await fetch(finalUrl, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
        },
      });


      const data = await response.json();

      if (response.status === 200) {
        
        return data;
    }

    else {
        return [];
    }

    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
}