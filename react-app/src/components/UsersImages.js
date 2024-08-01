import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const UsersImages = () => {


    const user = useSelector(state => state.session.user)
    const location = useSelector(state => state.location)


    console.log(location)






    return (
        <>


        </>
    )

};

export default UsersImages;