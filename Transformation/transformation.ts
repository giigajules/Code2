namespace Transformation {
    document.getElementById("transform")!.onclick = hndtransform
    document.getElementById("clear")!.onclick = hndClearCanvas
    //document.getElementById("undo")!.onclick = hndUndo

    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    let transformStorage: Array<DOMMatrix> = [];

    canvas.height = 600;
    canvas.width = 600;
    crc2.fillStyle = "#65e49eff";
    crc2.fillRect(0, 0, canvas.width, canvas.height);

    drawCoordinateSystem();
    transformStorage.push(crc2.getTransform());

    function drawCoordinateSystem(): void {
        for(let i: number = 0; i < 21; i++) {
            crc2.moveTo(i * 10, 0)
            crc2.lineTo(i * 10 + 1, 0)
            crc2.stroke();

            crc2.moveTo(0, i * 10)
            crc2.lineTo(0, i * 10 + 1)
            crc2.stroke();
        }
    }

    function getRandomNumber(_max: number, _min: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    function hndtransform(): void {
        const color: string = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        crc2.translate(getRandomNumber(canvas.width, 0), getRandomNumber(canvas.height, 0));
        crc2.rotate(getRandomNumber(360, 0));
        crc2.scale(getRandomNumber(5, 1), getRandomNumber(5, 1));
        crc2.fillStyle = color;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        drawCoordinateSystem();
        crc2.resetTransform();
        transformStorage.push(crc2.getTransform());
        console.log(transformStorage);
    }

    function hndClearCanvas(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        transformStorage = [];
    }

    // function hndUndo(): void {
    //     transformStorage.pop();
    //     crc2.clearRect(0, 0, canvas.width, canvas.height);
    //     crc2.setTransform(transformStorage[transformStorage.length - 1]);
    //     drawCoordinateSystem();
    // }
}