import React from 'react';
import { FaBars } from 'react-icons/fa';
import { logo } from '../assets';
import { MdLock } from 'react-icons/md';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="w-full fixed top-0 left-0 bg-transparent flex items-center justify-start ">
      <button
        className="h-[95px] w-[20vw] md:w-[15vw] bg-inherit flex justify-center items-center text-white gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-r-2 border-r-white border-spacing-2"
        onClick={toggleDrawer(true)}
      >
        <FaBars className=" w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">MENU</h1>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className="w-[60vw] md:w-[70vw] flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className=" w-[20vw] md:w-[15vw] h-[95px] flex text-white justify-center items-center gap-2 hover:bg-[#9b0808] active:bg-[#9b0808] border-l-2 border-l-white border-spacing-2">
        <MdLock className=" w-4 h-4 md:w-6 md:h-6" />
        <h1 className="text-md md:text-xl">LOGIN</h1>
      </div>
    </div>
  );
};
// ADD A DRAWER AND THATS IT
export default Header;
