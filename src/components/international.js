import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './Api';
import coronaImage from '../img/covid19.png';

class international extends Component{
    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        this.setState({ data:fetchedData });
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country:country});
    }
    
    render(){
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}


export default international;
