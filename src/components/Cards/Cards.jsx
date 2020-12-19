import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}} ) => {
    if(!confirmed)
    {
        return 'Menjalankan Data...'; 
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">

                {/* 1. TERJANGKIT */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}> 
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>TERJANGKIT</Typography>
                        <hr></hr>
                        <Typography variant="h3">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=",">
                            {confirmed.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br></br>
                        <Typography variant="body2"> Jumlah Kasus Aktif COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* 2. SEMBUH */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}> 
                    <CardContent>
                        <Typography color="textPrimary"  gutterBottom>SEMBUH</Typography>
                        <hr></hr>
                        <Typography variant="h3">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=",">
                            {recovered.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br></br>
                        <Typography variant="body2">Angka Recovery COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* 3. MENINGGAL */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}> 
                    <CardContent>
                        <Typography color="textPrimary"  gutterBottom>MENINGGAL</Typography>
                        <hr></hr>
                        <Typography variant="h3">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=",">
                            {deaths.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <br></br>
                        <Typography variant="body2">Angka Kematian COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;