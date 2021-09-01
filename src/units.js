
const player = document.getElementById('myPlayer')
const context = player.getContext('2d') // get Canvas Context object

context.beginPath()
context.fillStyle = 'black' // #ffe4c4
context.arc(200, 40, 40, 0, Math.PI * 2, true)
context.fill()

context.beginPath()
context.strokeStyle = 'red'
context.lineWidth = 5
context.arc(200, 60, 10, 0, Math.PI, false)
context.stroke()

// eyes
context.beginPath()
context.fillStyle = 'white'
context.arc(190, 50, 3, 0, Math.PI * 2, true) // draw left eye
context.fill()
context.arc(210, 50, 3, 0, Math.PI * 2, true) // draw right eye
context.fill()

// body
context.beginPath()
context.moveTo(200, 120)
context.lineTo(200, 80)
context.strokeStyle = 'black'
context.stroke()

// arms
context.beginPath()
context.strokeStyle = 'black'
context.moveTo(200, 100)
context.lineTo(180, 110)
context.moveTo(200, 100)
context.lineTo(220, 110)
context.stroke()

// legs
context.beginPath()
context.strokeStyle = 'black'
context.moveTo(200, 120)
context.lineTo(185, 145)
context.moveTo(200, 120)
context.lineTo(215, 145)
context.stroke()
