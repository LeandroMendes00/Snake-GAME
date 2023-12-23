<!-- Renderiza o jogo -->
const canvas = document.querySelector("canvas") 
<!-- Ctx contexto 2D -->
const ctx = canvas.getContext("2d") 

const size = 30

<!-- Deterima sua posição no canvas -->
const snake = [
    { x: 200, y:200},
    { x: 230, y:200},   
]

<!-- Armazena a direção da cobrinha -->
let direction, loopId

<!-- Desenha a cobrinha no canvas -->
const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    
    snake.forEach((position, index) => {
        if (index == snake.length -1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

<!-- Move a cobrinha e a desenha -->
const moveSnake = () => {
    if(!direction) return

    const head = snake[snake.length -1]
 
    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y})
    }

    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y})
    }

    if (direction == "down") {
        snake.push({ x: head.x, y: head.y + size})
    }

    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size})
    }

    snake.shift()
}

<!-- Move a cobrinha e a desenha -->
const gameLoop = () => {
    clearInterval(loopId)
    
    ctx.clearRect(0, 0, 600, 600)
    moveSnake()
    drawSnake()
    
    loopId = setInterval(() => {
        gameLoop()
    }, 300)
}

<!-- Inicia o loop -->
gameLoop()



