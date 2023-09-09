export const getFixtureCompetitions = async () => {

    const config = useRuntimeConfig();
    // Define the base URL
    const baseUrl = `${config.public.API_BASE_URL}/api/fixtures/competitions`;

    try {
      const response = await fetch(baseUrl, {
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