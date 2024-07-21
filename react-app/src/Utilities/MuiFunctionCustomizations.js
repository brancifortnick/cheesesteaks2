import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
function GridTemplateColumns() {
    return (
      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
         
        </Box>
        </div>
    );
};

export default GridTemplateColumns;