import { Box } from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DesignCard from './DesignCard';
import Workspace from './Workspace';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { getDesigns } from '../utils/fetchRequests';
import { setUserDesigns } from '../utils/reducers/appSlice';

export default function UserDesigns() {
  const userDesigns = useSelector((state) => state.app.userDesigns);
  console.log('userDesigns in userDesigns', userDesigns);
  const designId = useSelector((state) => state.design)._id;
  const design = userDesigns.filter((item) => {
    console.log(item);
    return item._id === designId;
  })[0];

  const dispatch = useDispatch();

  console.log(userDesigns);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const designs = await getDesigns();
        console.log(designs);
        dispatch(setUserDesigns(designs));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (!designId) {
    return (
      <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap={2}>
        {userDesigns.map((design) => (
          <DesignCard design={design} key={design._id} />
        ))}
      </Box>
    );
  } else
    return (
      <Fragment>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <TextField name='title' label='Title' defaultValue={design.title} />
          <Typography>created_at: {design.created_at}</Typography>
        </Box>
        <Workspace />
      </Fragment>
    );
}
