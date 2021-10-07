const apiKey = "T-QV8G3EUhrBGHEEgHtA0ysnOSgYGdLcsyHZ23F1O_kUlvayLsPvWsiq1nYW1IUrTPVO0dIF48fisDxLBCq1-5sI35f6kwxZOfscAbXr6m6Yfv0PsiSvVPtAyp9dYXYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business); /* To see the returned business object you can delete later */
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });    
            }
        });
    }
};

export default Yelp;