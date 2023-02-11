//Codewithjk

const counters = document.querySelectorAll(".counter");
const speed = 200; // lower the slower

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        //lower inc to slow and higher to slow

        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;

            //call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});