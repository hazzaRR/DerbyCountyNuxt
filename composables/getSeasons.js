export const getSeasons = async () => {

    const config = useRuntimeConfig();

    try {
      const response = await fetch(`${config.public.API_BASE_URL}/api/match/seasons`, {
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