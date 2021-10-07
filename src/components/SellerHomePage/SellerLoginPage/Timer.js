// import React, { useState, useEffect, useRef } from 'react'

// function Timer() {
//     const [days, setDays] = useState('00');

//     const [hours, setHours] = useState('00');

//     const [minutes, setMinutes] = useState('00');

//     const [seconds, setSeconds] = useState('00');
//     let interval = useRef();

//     const startTimer = () => {

//         const countDownDate = new Date

//             (productList.productEndDate)

//             // (2021,08,28,18,47)

//             .getTime();

//         interval = setInterval(() => {

//             const now = new Date().getTime();

//             const gap = countDownDate - now;

//             const daysGap = Math.floor(gap / (1000 * 60 * 60 * 24));

//             const hoursGap = Math.floor((gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

//             const minutesGap = Math.floor((gap % (1000 * 60 * 60) / (1000 * 60)));

//             const secondsGap = Math.floor((gap % (1000 * 60)) / 1000);

//             if (gap < 0) {

//                 clearInterval(interval.current)

//                 setDataDisplay(false)

//             } else {

//                 setDays(daysGap);

//                 setHours(hoursGap)

//                 setMinutes(minutesGap)

//                 setSeconds(secondsGap)

//             }

//         }, 1000);

//     }

//     useEffect(() => {

//         startTimer();

//         return () => {

//             clearInterval(interval.current)

//         }



//     }, [])
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Timer
