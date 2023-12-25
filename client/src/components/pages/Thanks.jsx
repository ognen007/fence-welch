import React from 'react';
import { useNavigate } from "react-router-dom";

const Thanks = () => {
    const navigate = useNavigate();

    const homeRedirection = () => {
        navigate("/");
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ color: "#fff",textAlign: 'center', width: "80%", height: "80vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: "#141E30" }}>
                <h1 style={{ marginBottom: '20px' }}>Form Submitted</h1>
                <i style={{ marginBottom: '20px' }}>Our team will contact you as soon as possible</i>
                <button onClick={() => homeRedirection()} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Click here to continue</button>
            </div>
        </div>
    )
}

export default Thanks;
