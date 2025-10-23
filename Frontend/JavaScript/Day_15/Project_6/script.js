
setInterval(() => {
        const result = document.getElementById('result');
        const currTime = Date.now();
        const olympicTime = new Date(2028, 6, 14).getTime();


        let timer = olympicTime - currTime;

        const day = Math.floor((timer) / (1000*60*60*24));
        timer%=1000*60*60*24;

        const hour = Math.floor((timer) / (1000*60*60));
        timer%=1000*60*60;

        const minutes = Math.floor((timer) / (1000*60));
        timer%=1000*60;

        const seconds = Math.floor((timer) / (1000));
        timer%=1000;

        result.textContent = `Time left for Olympics : ${day} Days ${hour} Hours ${minutes} Minutes ${seconds} Seconds`;



       }, 1000);


