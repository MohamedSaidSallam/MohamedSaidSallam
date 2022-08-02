particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('.typewriter', {
    loop: true,
});

instance.typeString("Hello!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I'm Mohamed Said.")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("a DevOps Engineer.")
    .pauseFor(1000)
    .deleteChars(21)
    .typeString(' also enjoy making random automation scripts<br>and small apps.')
    .pauseFor(1000)
    .deleteAll()
    .start();
