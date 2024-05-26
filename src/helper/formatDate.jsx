import React from 'react';

const FormatDate = (props) => {

    const newDate = new Date(props.date);
    const formattedDate = newDate.getDate() + '-' + newDate.getMonth() + '-' + newDate.getYear();
    return formattedDate;
}

export default FormatDate;
