    // =====
    //   1
    // =====


        //setTimeout(() => {
        //     document.body.style.backgroundColor = 'red';
        //     setTimeout(() => {
        //         document.body.style.backgroundColor = 'orange';
        //         setTimeout(() => {
        //             document.body.style.backgroundColor = 'yellow';
        //             setTimeout(() => {
        //                 document.body.style.backgroundColor = 'green';
        //                 setTimeout(() => {
        //                     document.body.style.backgroundColor = 'blue';
        //                 }, 1000)
        //             }, 1000)
        //         }, 1000)
        //     }, 1000)
        // }, 1000)
        

        // =====
        //   2
        // =====
        
        // const delayedColorChange = (newColor, delay, doNext) => {
        //     setTimeout(() => {
        //         document.body.style.backgroundColor = newColor;
        //         doNext && doNext();
        //     }, delay)
        // }
        
        // delayedColorChange('red', 1000, () => {
        //     delayedColorChange('orange', 1000, () => {
        //         delayedColorChange('yellow', 1000, () => {
        //             delayedColorChange('green', 1000, () => {
        //                 delayedColorChange('blue', 1000, () => {
        
        //                 })
        //             })
        //         })
        //     })
        // });

        // =====
        //   3
        // =====

        // const DelayColor = (color,delay) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() =>{
        //             document.documentElement.style.backgroundColor = color;
        //             resolve();
        //         },delay)
        //     })
        // }
        
        // DelayColor('red',1000)
        //     .then(() => DelayColor('orange',1000))
        //     .then(() => DelayColor('yellow',1000))
        //     .then(() => DelayColor('green',1000))
        //     .then(() => DelayColor('blue',1000))    
        //     .then(() => DelayColor('indigo',1000))
        //     .then(() => DelayColor('voilet',1000))