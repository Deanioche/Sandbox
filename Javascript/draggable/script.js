// add mousedown handler    
document.addEventListener('mousedown', handleMousedown);

function handleMousedown() {
    // on mousedown add listeners
    document.addEventListener('mouseup', handleMouseup);
    document.addEventListener('mousemove', handleMousemove);
}

function handleMousemove(event) {
    document.querySelector('.info-block').innerText = `mouse point on drag: ${event.x}:${event.y}`;

    document.querySelector('.draggable').style.left = event.x - 50 + 'px';
    document.querySelector('.draggable').style.top = event.y - 25 + 'px';
}

function handleMouseup() {
    // on mouseup remove listeners
    document.removeEventListener('mouseup', handleMouseup);
    document.removeEventListener('mousemove', handleMousemove);
}