import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Paper, Box, TextField, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../hooks/useAuth';
import { getDesignDetails, setSearchTerm } from '../utils/reducers/designSliceV2';

export default function HomePageSearch() {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.designV2.searchTerm);
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        dispatch(setSearchTerm(event.target.value));
    };

    useEffect(() => {
        setSearchTerm(searchTerm);
    }, [searchTerm]);

    return (
        // {/* // Paper is a container for displaying content to give an 'elevated surface' look */}
        <Paper elevation={2} sx={{ 
            padding: 4, 
            margin: 4, 
            // backgroundColor: '#E0E1DD', 
            backgroundImage: 'linear-gradient(to right, #EDEDE9, #D5BDAF)',
            width: 'auto' 
            }}>
            {/* Typography is used for title text */}
            <Typography variant="h4" component="h1" gutterBottom align='center'>
                What will you design today, {user.username}?
            </Typography>
            {/* Box is a wrapper tool, using it to contain the 'TextField and SearchIcon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* TextField lets users enter and edit text. using it to represent search bar with an InputProps to include a search button inside the text field*/}
                <TextField
                    fullWidth
                    variant='outlined'
                    onChange={handleSearchChange}
                    placeholder='Search your content'
                    sx={{
                        // apply styles inside the placeholder of the input element within TextField
                        '& .MUIInputBase-input::placeholder': {
                            color: '#32333B',
                            opacity: 1,
                        },
                        input: {
                            color: '#736C6C',
                        }
                    }}
                    InputProps={{
                        // startAdornment is used for adding read-only elements like the SearchIcon that's being used within the Button 
                        startAdornment: (
                            <IconButton variant='contained' sx={{ marginRight: 1 }}>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Box>
        </Paper>
    );
}