const getAirlinePassengers = async (page, size,asyncFunc) => {
    asyncFunc(true);
    console.log('fetching data from url');
    let url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;
    try {
        let response = await fetch(url,{method:'GET'})
        if(!response.ok)throw new Error('Fetch failed status not ok');
        let body = await response.json();
        asyncFunc(false);
        return body;
    } catch (e) {
        console.log('passenger fetch failed', e);
        asyncFunc(false);
        return null;
    }

};

module.exports.getAirlinePassengers = getAirlinePassengers;