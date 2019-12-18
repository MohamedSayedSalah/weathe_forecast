import {useEffect, useState} from "react";


export default () =>{
    const [weatherInfo , setWeatherInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let key = process.env.REACT_APP_API_KEY
        const url = "https://api.openweathermap.org/data/2.5/forecast?q=Berlin&APPID="+key

        fetch(url
            ,
        )
            .then(res => res.json())
            .then(({list}) => setWeatherInfo(list))
            .finally(()=> setLoading(false))
        ;

    }, []);

    return [weatherInfo,loading];
}

