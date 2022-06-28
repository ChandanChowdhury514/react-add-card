import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom';

const CardDetails = () => {
  return (
    <div className="App">
      <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Add a new card
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="number"
                  label="Card Number..."
                  placeholder="Enter Card Number "
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="text"
                  label="Owner Name..."
                  placeholder="Owner Name "
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <TextField
                    type="number"
                    label="Exp Date..."
                    placeholder="Exp Date..."
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField
                    type="number"
                    label="CVC"
                    placeholder="Enter CVC"
                    variant="outlined"
                  
                    fullWidth
                    required
                  />
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth>
                    <Link to ='/save'>
                      Save
                    </Link>
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDetails;
