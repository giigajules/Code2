namespace Canvas {
    document.addEventListener("DOMContentLoaded", hndLoad)

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    type Vector2 = {
        x: number;
        y: number;
    }

    function hndLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        canvas.height = 700;
        canvas.width = 1520;

        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        drawTriangle();
    }

    function drawTriangle(): void {
        const triangle: Path2D = new Path2D();
        triangle.moveTo(100, 50);
        triangle.lineTo(50, 150);
        triangle.lineTo(150, 150);
        triangle.closePath();
    
        crc2.fillStyle = "#e64e6cff";
        crc2.fill(triangle);        
        crc2.strokeStyle = "#000000";
        crc2.stroke(triangle);  
    }

}