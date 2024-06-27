
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Registration';
import LoginForm from './Login';

const AppRoute = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRoute;
