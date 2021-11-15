import React, { useEffect, useState } from 'react'
import style from '../../style/graph.module.css'
import { Line } from "react-chartjs-2"
import option from '../../utils/chartOption'
const URL = 'https://disease.sh/v3/covid-19/historical/all?laastdays=120'

//  treact Graph function
function Graph() {
    //  chart Function 
    const [chartInfo, setChartInfo] = useState({})
    //  build chart data function
     const buildChartData = (data, casesType='cases') => {
         const chartData = []
         let lastDataPoint
        for(let date in data.cases){
            if(lastDataPoint){
                const newDataPoint = {
                      x: date,
                y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint)
                console.log(newDataPoint);
            }
                lastDataPoint = data['cases'][data]
         }
         return chartData
     }
    
       useEffect(() => {
        const fetchData = async () => {
                await fetch(URL)
        .then((res) => res.json())
        .then((data) =>{
            const getChartData = buildChartData(data)
            console.log(getChartData)
            setChartInfo(getChartData)
        })
        }
        fetchData()
    },[])


    return (
        <div className={style.graph__container}>
        {
            <Line  
            options={option}
            data={ { datasets:  [{data: chartInfo}] }}
            />
            }
        </div> 
    )

  }

export default Graph
