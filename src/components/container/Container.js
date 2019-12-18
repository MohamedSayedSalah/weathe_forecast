import React, {useEffect, useState} from "react";
import {Spin, Row} from 'antd'
import Card from '../card/Card'
import useWeatherForecastApi from "../../hooks/useWeatherForecstApi";
import containerStyle from './Container.module.scss'

export default () => {

    const [weatherInfo, loading] = useWeatherForecastApi();

    return (

        <Row className={containerStyle.container}>
            <Spin spinning={loading}>
                {weatherInfo && weatherInfo.map((hourlyInfo,idx) => <Card key={idx} hourlyInfo={hourlyInfo}/>)}
            </Spin>
        </Row>
    )
}