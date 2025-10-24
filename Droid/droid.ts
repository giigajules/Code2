export namespace Droid {

    type Vector3 = {
        x: number,
        y: number,
        z: number
    }

    interface State {
        [module: string]: {
            position: Vector3,
            rotation: Vector3
        }
    }

    interface Command {
        module: string,
        method: string,
        data: string
    }

    const forward: Command = {
        module: "Chassis",
        method: "move",
        data: "forward"
    }
    const backward: Command = {
        module: "Chassis",
        method: "move",
        data: "back"
    }
    const left: Command = {
        module: "Chassis",
        method: "move",
        data: "left"
    }
    const right: Command = {
        module: "Chassis",
        method: "move",
        data: "right"
    }
    const stop: Command = {
        module: "Chassis",
        method: "move",
        data: "stop"
    }

    let flipflop: number = 0;

    function getRandomNumber(_max: number): number {
        return Math.floor(Math.random() * _max);
    }

    function moveRandomly(): Command {
        const randomizer: number = getRandomNumber(3);
        if (randomizer == 0)
            return forward;
        else if (randomizer == 1)
            return left
        else if (randomizer == 2)
            return right
        else
            return backward
    }

    function oneForwardOneLeft(): Command {
        if (flipflop == 0) {
            flipflop = 1;
            return forward;
        }

        else {
            flipflop = 0;
            return left;
        }
    }

    enum BORDER {
        POS = 2,
        NEG = -2
    }

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

    export function getCommand(_state: State): Command {

        console.log("Achtung, hier ist state:", _state["Chassis"].rotation);

        return moveRandomly();

    }
}