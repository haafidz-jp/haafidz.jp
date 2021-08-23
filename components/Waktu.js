import React from 'react';

import moment from 'moment'
import Moment from 'react-moment';

function Waktu() {
    const currentDateTime = moment()

    return(
        <div>
            
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{currentDateTime}</Moment>

        </div>
    )
}

export default Waktu;