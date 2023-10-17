import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import LogoBar from './components/LogoBar';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  TextField,
} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const SearchBar = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  // ei vielä toimi
  const resetFilter = () => {
    console.log('reset');
    setFilter('');
    console.log(filter);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{ mb: 5 }}
      >
        <Grid item>
          <TextField
            value={filter}
            id='outlined-basic'
            label='type company name...'
            variant='outlined'
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            startIcon={<DeleteIcon />}
            size='large'
            color='error'
            onClick={resetFilter}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <AddReactionIcon fontSize='large' sx={{ marginRight: 4 }} />
          <Typography variant='h6'>logo api</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='md'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              find logos
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              start typing to find logos of companies.
              <br /> the underlying api is provided by{' '}
              <a href='http://www.clearbit.com'>clearbit.com</a>
            </Typography>

            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <SearchBar filter={filter} setFilter={setFilter} />
              </Grid>
            </Grid>
            <LogoBar filter={filter} />
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
