import React ,{useContext} from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainHome = () => {
    const {captain,setCaptain} =React.useContext(CaptainDataContext);
    return (
        <div>
            {{captain} && <h1>Welcome {captain.fullname.firstname}</h1>}
            <h1>Welcome to Captain Home</h1>
        </div>
    );
};

export default CaptainHome;