particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('.typewriter', {
    loop: true
});

instance.typeString("Hello!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I'm Mohamed Said.")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("a Software Engineer.")
    .pauseFor(1000)
    .deleteAll()
    .typeString('Currently<br>Web Developing.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Also interested in DevOps.')
    .pauseFor(1000)
    .deleteAll()
    .start();
