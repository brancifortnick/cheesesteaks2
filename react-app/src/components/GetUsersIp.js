// import React, { useState, useEffect } from 'react';

// const GetUsersIp = () => {
//     let API_KEY = 'b54e5eacb39c4a2687a5295f24e172d0';

//     const [ipAddress, setIpAddress] = useState('');

//     const fetchApiLocationData = () => {
//         fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=1.1.1.1&fields=geo`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setIpAddress(data.ip);
//                 console.log(data.ip, "+++++++++++++++++++++++++++")
//             })
//             .catch((error) => console.error(error));
//     };

//     console.log(fetchApiLocationData, 'object of geolocation data -> not googlemaps ip');

//     useEffect(() => {
//         const fetchIp = async () => {
//             try {
//                 const response = await fetch('https://api.ipify.org?format=json');
//                 const data = await response.json();
//                 setIpAddress(data.ip);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchIp();
//     }, []);

//     console.log(ipAddress);

//     return (
//         <>
//             <div>{ipAddress}</div>
//         </>
//     );
// };

// export default GetUsersIp;
