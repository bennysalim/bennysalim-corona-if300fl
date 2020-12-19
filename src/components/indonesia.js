import React, { Component } from 'react';
import styles from './Cards/Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Axios from 'axios';
import CountUp from 'react-countup';
import cx from 'classnames';

class indonesia extends React.Component{
	constructor(props){
		super(props);
	}

	state={
		positif:0,
		sembuh:0,
		meninggal:0,
		lastupdate:0,
	}
	componentDidMount(){
		this.getData();
	}
	async getData(){
		const resApi=await Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
		this.setState({
			positif: resApi.data.positif,
			sembuh: resApi.data.sembuh,
			meninggal: resApi.data.meninggal,
			lastupdate:resApi.data.lastupdate
		});
	}
	render(){
		return(
			<div className={styles.container}>
				<Grid container spacing={2} justify="center">
					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
						<CardContent>
							<Typography color="textPrimary" gutterBottom>TERJANGKIT</Typography>
							<hr></hr>
                        				<Typography variant="h3">
								<CountUp start={0} end={this.state.positif} duration={2.5} separator=",">
								{this.state.positif}
								</CountUp>
							</Typography>
							<Typography color="textSecondary">{new Date(this.state.lastupdate).toDateString()}</Typography>
							<br></br>
							<Typography variant="body2">Angka Positif Corona di Indonesia</Typography>
						</CardContent>
					</Grid>

					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}> 
			                	<CardContent>
                        				<Typography color="textPrimary"  gutterBottom>SEMBUH</Typography>
					                        <hr></hr>
					                        <Typography variant="h3">
									<CountUp start={0} end={this.state.sembuh} duration={2.5} separator=",">
                            						{this.state.sembuh}
                            						</CountUp>
                        					</Typography>
                        				<Typography color="textSecondary">{new Date(this.state.lastupdate).toDateString()}</Typography>
                        				<br></br>
                        				<Typography variant="body2">Total Sembuh dari Corona di Indonesia</Typography>
                    				</CardContent>
                			</Grid>
					
					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}> 
                    				<CardContent>
				                        <Typography color="textPrimary"  gutterBottom>MENINGGAL</Typography>
					                        <hr></hr>
					                        <Typography variant="h3">
									<CountUp start={0} end={this.state.meninggal} duration={2.5} separator=",">
                            						{this.state.meninggal}
                            						</CountUp>
                        					</Typography>
                        				<Typography color="textSecondary">{new Date(this.state.lastupdate).toDateString()}</Typography>
                        				<br></br>
                        				<Typography variant="body2">Angka Kematian COVID-19 di Indonesia</Typography>
                    				</CardContent>
                			</Grid>
				</Grid>
			</div>
		);
	}
}

export default indonesia;