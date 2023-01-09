// const seats = document.querySelectorAll(".seat-icon:not(.seat-icon--checked)");

const loadSeats = () => {
    const sec = document.getElementsByClassName("seats-model");
    const arr1 = sec[1].querySelectorAll(".seat-icon");
    const arr0 = sec[0].querySelectorAll(".seat-icon");
    const blankSeats = [...arr0, ...arr1];

    const seats = {};
    for (let i = 1; i <= 20; i++) {
        seats[i] = 0;
    }

    seats[4] = -1;
    seats[9] = -1;
    seats[12] = -1;

    blankSeats.map((seat) => {
        const position = seat.getAttribute("position");

        // console.log(seats[position]);

        if (seats[position] == -1) seat.classList.toggle("seat-icon--checked");
        if (seats[position] != -1) {
            seat.addEventListener("click", () => {
                const isOn = seat.classList.toggle("seat-icon--select");

                const total = parseInt(document.getElementById("TOTAL").innerText);
                document.getElementById("TOTAL").innerText =
                    total + (isOn ? 1 : -1) * 100;
                if (isOn == 1) {
                    const text = document.getElementById("SEATS").innerText;
                    const pos = seat.getAttribute("position");
                    document.getElementById("SEATS").innerText = `${text} ${pos}`;
                }
            });
        }
    });
};
loadSeats();

const testBtn = document.getElementById("SUBMIT");
testBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const start = document.querySelector(
        'input[name="start-point"]:checked'
    ).value;
    const end = document.querySelector('input[name="end-point"]:checked').value;

    const name = document.querySelector('input[id="name"]').value;
    const tel = document.querySelector('input[id="tel"]').value;
    const email = document.querySelector('input[id="email"]').value;

    const price = document.getElementById("TOTAL").innerText;
    const seats = document.getElementById("SEATS").innerText.split(" ");

    const result = { start, end, name, tel, email, price, seats };
    window.location.replace("paymentmethods.html");
});