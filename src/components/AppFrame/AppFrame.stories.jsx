import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppFrame from './AppFrame';

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameEx = () => (
    <Router>
        <AppFrame>
            
        </AppFrame>
    </Router>
)