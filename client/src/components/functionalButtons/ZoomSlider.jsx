import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { setZoom } from '../../utils/reducers/appSlice';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function ZoomSlider() {
  const zoom = useSelector((state) => state.app.zoom);
  const dispatch = useDispatch();
  return (
    <Stack direction='row' alignItems='center'>
      <IconButton onClick={() => dispatch(setZoom(zoom - 10))}>
        <RemoveCircleRoundedIcon />
      </IconButton>
      <Typography>{zoom}%</Typography>
      <IconButton onClick={() => dispatch(setZoom(zoom + 10))}>
        <AddCircleRoundedIcon />
      </IconButton>
      <Tooltip title='reset to fit window'>
        <IconButton onClick={() => dispatch(setZoom(100))} size='small'>
          <RestartAltIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
