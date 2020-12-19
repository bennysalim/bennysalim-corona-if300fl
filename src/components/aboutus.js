import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Cell, Grid } from 'react-mdl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(34),
    height: theme.spacing(34),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width: '100%', margin: 'auto'}}>
      <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Benny Septiawan Salim</h2>
                        <img
                            src="https://lh3.googleusercontent.com/M5kTPkVNj2RTnn5AcauCYmJLV8sinkjQTXi-K0MzBBRJjELbi40M7PTSShr5pMl7g2cvkMY=s87"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            00000034748
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Jonathan Christian Adif Sugiarto</h2>
                        <img
                            src="https://lh3.googleusercontent.com/1BFfckWcY2Ls7eWQWDnQeq5V8VphQY9b4EsPOtqzCV1idif34WRut7Nd3YpG8w6vaoCxsg=s85"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            00000034563
                        </p>
                    </Cell>
                </Grid>
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kevin Hindra Jaya</h2>
                        <img
                            src="https://lh3.googleusercontent.com/oDcaSeLbr0jMU0kM3ZwOh9X4RS_0J_c4OPNuL2L5PYu2Fa3A0F9J-7jkie86IwRVsEJS=s85"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            00000033631
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Ricky T</h2>
                        <img
                            src="https://lh3.googleusercontent.com/mmk5G7kYs7NUhar8Nlj22_lllnkU40cyJ6ca5fn1GQb5W_0dgnd08gYDp_x8tgJMeBxHRWM=s85"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            00000034767
                        </p>
                    </Cell>
                </Grid>
            </div>
            </div>
  );
}