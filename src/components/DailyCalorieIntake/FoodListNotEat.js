import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export const CustomizedList = ({ categorie, list }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 1,
          pt: 1,
          pb: open ? 0 : 1,
          '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
        }}
      >
        <ListItemText
          primary={categorie.charAt(0).toUpperCase() + categorie.slice(1)}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: '16px',
            color: open ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)',
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 200,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {open &&
          list.map(item => (
            <li key={item.title.ru}>
              <ListItemText
                primary={item.title.ru}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'medium',
                }}
              />
            </li>
          ))}
      </List>
    </Box>
  );
};
