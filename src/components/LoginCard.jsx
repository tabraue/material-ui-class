import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import { Mail, Lock, VisibilityOff, Visibility } from '@mui/icons-material';
import { useState } from 'react';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: '700px',
        height: 'auto',
        backgroundColor: '#f0a393',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '10vh auto',
      }}
    >
      <CardHeader title="Login" sx={{ color: 'white', textAlign: 'center' }} />
      <CardContent>
        <TextField
          variant="outlined"
          margin="dense"
          label="Email"
          id="email"
          type="email"
          fullWidth={true}
          sx={{
            backgroundColor: '#fae5e1',
            borderRadius: '5px',
            '& label.Mui-focused': {
              color: '#b87568',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#b87568',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail
                  sx={{
                    color: '#f0a393',
                  }}
                />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="dense"
          fullWidth={true}
          sx={{
            backgroundColor: '#fae5e1',
            borderRadius: '5px',
            '& label.Mui-focused': {
              color: '#b87568',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#b87568',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock
                  sx={{
                    color: '#f0a393',
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Visibility sx={{ cursor: 'pointer', color: '#33791b' }} />
                ) : (
                  <VisibilityOff sx={{ cursor: 'pointer', color: '#d1371c' }} />
                )}
              </InputAdornment>
            ),
          }}
        />
      </CardContent>

      <Divider />

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#00A36C',
            marginRight: '30px'
          }}
          onClick={() => alert('clicked!')}
        >Log in</Button>


      </CardActions>
    </Card>
  );
};

export default LoginCard;
