if ('ontouchstart' in window) {
    console.log('Trình duyệt hỗ trợ sự kiện cảm ứng');
} else {
    console.log('Trình duyệt không hỗ trợ sự kiện cảm ứng');
}

const container = document.querySelector('.fireworks');
const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 60,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 360
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 0,
        max: 100
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 4
        },
        trace: {
            min: 1,
            max: 2
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: true,
        move: false,
        max: 1
    },
    sound: {
        enabled: false, // Tắt âm thanh ban đầu
        files: [
            '/static/sound/explosion0.mp3',
            '/static/sound/explosion1.mp3',
            '/static/sound/explosion2.mp3'
        ],
        volume: {
            min: 2,
            max: 70
        }
    }
});

// Hàm để kích hoạt âm thanh sau khi người dùng tương tác
function enableAudio() {
    if (fireworks._sound.options.enabled === false) {
        console.log('Âm thanh đã được kích hoạt!');
        fireworks._sound.options.enabled = true; // Bật âm thanh
    }
}

container.addEventListener('touchstart', (event) => {
    fireworks.mouse.move = true;
});

container.addEventListener('touchend', (event) => {
    fireworks.mouse.move = false;
});

// Thêm sự kiện tương tác của người dùng
container.addEventListener('click', enableAudio);
container.addEventListener('touchstart', () => {
    container.addEventListener('touchend', enableAudio);
});

fireworks.start();
