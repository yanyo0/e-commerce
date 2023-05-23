import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';

export default function ListItemsMenuBar( {icon, name, avatar}) {
  return (
    <ListItem sx={{p:0}}>
        <ListItemButton  > 
        <ListItemIcon  >
          
            {icon && icon}
            {avatar && <Avatar alt={avatar} src={avatar} />}
        </ListItemIcon>
        <ListItemText  primary={name}/>
        </ListItemButton>
        </ListItem>
  )
}
