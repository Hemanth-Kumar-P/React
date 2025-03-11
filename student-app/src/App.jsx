import React from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
const App = () => (
    <div>
        <h1 style={{ textAlign: 'center', fontSize: '28px', margin: '20px 0' }}>
            Welcome to Student Management System
        </h1>
        <StudentTable />
    </div>
);

export default App;


