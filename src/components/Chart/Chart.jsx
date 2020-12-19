import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../Api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data:{confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    },[]);
    /* MEMBUAT LINE CHART */
    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Terjangkit',
                            borderColor: 'orange',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Meninggal',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0,0, 0.5)',
                            fill: true,
                        }],
                    }}
                />) : null
    );
    
    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
        ?(
            <Bar 
                data={{
                    labels:['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:'Jiwa',
                        backgroundColor:[
                            'orange',
                            'green',
                            'red',],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display: false},
                    title:{display:true, text:`Current state in ${country}`}
                }}
            />
        ) : null
    )
            
    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    )
}

export default Chart
