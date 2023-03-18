import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const data = {
  severity: 'warning',
  title: 'Maintenance incoming',
  content: 'Anubis will be unavailable briefly Saturday the 18th for about an hour starting at 11PM while we do ' +
    'some minor cluster updates (2023-03-18 23:00:00 EDT - 2023-03-19 00:00:00 EDT).',
  // action: {
  //   href: 'https://discord.gg/GEYtaATJHs',
  //   label: 'OSIRIS discord',
  // },
};

export default function GenericAd() {
  return (
    <Zoom in>
      <Alert
        severity={data.severity}
        variant="outlined"
        sx={{mt: 2, mb: 2}}
        action={
          <React.Fragment>
            {data.action && (
              <Button
                sx={{m: 2}}
                variant={'contained'}
                color={'primary'}
                startIcon={<ExitToAppIcon/>}
                href={data.action.href}
                target="_blank"
                rel="noreferrer"
              >
                {data.action.label}
              </Button>
            )}
          </React.Fragment>
        }
      >
        <AlertTitle sx={{fontSize: 22}}>
          <strong>
            {data.title}
          </strong>
        </AlertTitle>
        <Typography variant={'body1'}>
          {data.content}
        </Typography>
      </Alert>
    </Zoom>
  );
}