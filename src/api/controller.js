const getAirlinePassengers = async (page, size,) => {
    console.log('fetching data from url');
    let url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;
    try {
        let response = await fetch(url,{method:'GET'})
        if(!response.ok)throw new Error('Fetch failed status not ok');
        let body = await response.json();
        return body;
    } catch (e) {
        console.log('passenger fetch failed', e);
        return null;
    }

};

module.exports.getAirlinePassengers = getAirlinePassengers;