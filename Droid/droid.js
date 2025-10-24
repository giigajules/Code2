export var Droid;
(function (Droid) {
    const forward = {
        module: "Chassis",
        method: "move",
        data: "forward"
    };
    const backward = {
        module: "Chassis",
        method: "move",
        data: "back"
    };
    const left = {
        module: "Chassis",
        method: "move",
        data: "left"
    };
    const right = {
        module: "Chassis",
        method: "move",
        data: "right"
    };
    const stop = {
        module: "Chassis",
        method: "move",
        data: "stop"
    };
    let flipflop = 0;
    function getRandomNumber(_max) {
        return Math.floor(Math.random() * _max);
    }
    function moveRandomly() {
        const randomizer = getRandomNumber(3);
        if (randomizer == 0)
            return forward;
        else if (randomizer == 1)
            return left;
        else if (randomizer == 2)
            return right;
        else
            return backward;
    }
    function oneForwardOneLeft() {
        if (flipflop == 0) {
            flipflop = 1;
            return forward;
        }
        else {
            flipflop = 0;
            return left;
        }
    }
    let BORDER;
    (function (BORDER) {
        BORDER[BORDER["POS"] = 2] = "POS";
        BORDER[BORDER["NEG"] = -2] = "NEG";
    })(BORDER || (BORDER = {}));
    // function getForwardVector(_state: State): Command {
    //     if (_state["Chassis"].rotation.y == 0)
    //         if (_state["Chassis"].position.z == BORDER.POS)
    //             return forward;
    //     else if (_state["Chassis"].rotation.y == -90)
    // }
    // function ortskontrollfahrt(_state: State): Command {
    //     // define a border: z 2 and -2, x 2 and -2
    //     // if droid's direction + 1 equals border, turn left
    //     // if it doesn't, move forward
    // }
    function getCommand(_state) {
        console.log("Achtung, hier ist state:", _state["Chassis"].rotation);
        return moveRandomly();
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
