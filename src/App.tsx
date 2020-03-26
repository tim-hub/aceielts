import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/tim-hub">
        tim-hub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" align={'center'} gutterBottom>
          AceIelts is maintained
        </Typography>
          <br/>
          <br/>
        <Typography component="p" align={'center'} gutterBottom>
          Thanks for your kindly love, as a side project and a small team, waht we can do only is to offer our love and better product to you.

          It is scheduled under maintain between 28 ~ 29 March 2020 (+13:00)
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
