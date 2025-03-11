import React from 'react';

const StudentTable = () => {
    const students = [
        { name: 'Hemanth Kumar', rollNo: '21EC001', marks: 85 },
        { name: 'Rajesh Kumar', rollNo: '21EC002', marks: 78 },
        { name: 'Priya Sharma', rollNo: '21EC003', marks: 92 },
        { name: 'Anjali Gupta', rollNo: '21EC004', marks: 88 },
    ];

    return (
        <div style={{ padding: '16px' }}>
            <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '16px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Student Table</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Name</th>
                            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Roll Number</th>
                            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} style={{ textAlign: 'center' }}>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.name}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.rollNo}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{student.marks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;
