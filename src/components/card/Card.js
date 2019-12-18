import React, {useEffect, useState} from "react";
import {Collapse,Row,Icon} from 'antd'
import cardStyle from './Card.module.scss'
import {ReactComponent as  sunny} from "../../sunny.svg"
import {ReactComponent as  night} from "../../night.svg"
import {ReactComponent as  cloudyNight} from "../../cloudyNight.svg"
import {ReactComponent as  cloudyDay} from "../../cloudyDay.svg"
import {ReactComponent as  rainy} from "../../rainy.svg"





export default ({hourlyInfo}) =>{
    const { Panel } = Collapse;

    const dataTime = (timeStamp)=>{

        let date =  timeStamp.substr(5,5) ;
        let time = timeStamp.substr(11) ;

        time  = parseInt(time.substr(0,2)) >= 12 ?
              (parseInt(time.substr(0,2)) - 12).toString() === '0' ?
                  '12 PM'  : (parseInt(time.substr(0,2)) - 12).toString() + ' PM' :
            time.substr(0,2) === '00' ? '12 AM' : time.substr(1,1)   + ' AM';

        date = date.replace("-","/");
      return {date: date , time: time}
    }


    const dayNight = (timeStamp)=>{
        return parseInt(timeStamp.substr(11,2)) >= 6 && parseInt(timeStamp.substr(11,2)) <= 18 ?
            'day':'night'
        ;
    };

    const weatherIcon = (timeStamp , forecast)=>{
        return forecast === 'Rain' ? rainy :
            dayNight(timeStamp)  === 'day' ? (forecast === 'Clouds' ? cloudyDay : sunny) : (forecast === 'Clouds' ? cloudyNight : night)
    }

    const convertFromKelvin = (degree)=>(Math.ceil(degree-273.15) );



    return (
      <Row className={cardStyle.card}>
        <Collapse accordion  bordered={false} >
            <Panel key={hourlyInfo.dt} header={
                <React.Fragment>
                    <span className={cardStyle.time}> {dataTime(hourlyInfo.dt_txt).time}</span>
                    <span className={cardStyle.date}> {dataTime(hourlyInfo.dt_txt).date}</span>
                    <span> <Icon className={cardStyle.timeIcon} component={weatherIcon(hourlyInfo.dt_txt,hourlyInfo.weather[0].main)} /></span>
                    <span className={cardStyle.weather}>{convertFromKelvin(hourlyInfo.main.temp)}°</span>
                    <span className={cardStyle.weatherDescription}> {hourlyInfo.weather[0].main} </span>
                    <span className={cardStyle.windSpeed} >Wind Speed {hourlyInfo.wind.speed} Km/h</span>
                </React.Fragment>
            }>

                <span  className={cardStyle.realFeel}>RealFeel®: {convertFromKelvin(hourlyInfo.main.feels_like)}°</span>
                <span  className={cardStyle.humidity}>Humidity: {hourlyInfo.main.humidity}%</span>



            </Panel>
        </Collapse>
      </Row>
    )
}