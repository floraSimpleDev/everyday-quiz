const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        let target = counter.getAttribute("data-target");
        let currentCounter = +counter.innerText;
        console.log(target, currentCounter);

        const increment = target / 200;

        if (currentCounter < target) {
            counter.innerText = `${Math.ceil(currentCounter + increment)}`;
            setTimeout(() => {
                updateCounter()
            }, 10);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});
