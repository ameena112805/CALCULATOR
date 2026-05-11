document.addEventListener("DOMContentLoaded", () => {

    const inputVal = document.getElementById("userinput");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";

    const actions = {
        "AC": () => {
            currentInput = "";
            inputVal.innerText = "0";
        },

        "DEL": () => {
            currentInput = currentInput.slice(0, -1);
            inputVal.innerText = currentInput || "0";
        },

        "=": () => {
            try {
                currentInput = eval(currentInput).toString();
                inputVal.innerText = currentInput;
            } catch {
                currentInput = "";
                inputVal.innerText = "ERROR";
            }
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const value = e.target.innerText;

            (actions[value] || (() => {
                currentInput += value;
                inputVal.innerText = currentInput;
            }))();
        });
    });

});