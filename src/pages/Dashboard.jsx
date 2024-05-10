import * as React from 'react';
import { useNavigate } from 'react-router-dom'

function Dashboard(props) {
    const logoutButton = ()=>{
        localStorage.removeItem("token");
        navigate("/login")
    }
    const navigate = useNavigate();
        React.useEffect(() => {
        
        if(localStorage.getItem("token") == null) {
            navigate("/login");
        }

    }, []);

    return (
        <div>
            <p>kamu berhasil login</p>
            <button onClick={logoutButton}>Logout Masbro</button>
        </div>
    );
}

export default Dashboard;