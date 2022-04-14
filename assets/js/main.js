

// mode swing
const modeMain = document.querySelector('.mode_two');
const drakMode = document.querySelector('.drak_mode');
const lightMode = document.querySelector('.light_mode');

drakMode.addEventListener('click', ()=>{
  modeMain.classList.add('active_mode');

  document.body.classList.add('light_mode_main');

  document.querySelector('#fp-nav ul li a span').style.color = '#000000';
});

lightMode.addEventListener('click', ()=>{
  modeMain.classList.remove('active_mode');

  document.body.classList.remove('light_mode_main');
});

// animation
const reveal = gsap.utils.toArray('.reveal');
      reveal.forEach((text, i) => {
        ScrollTrigger.create({
          trigger: text,
          toggleClass: 'active',
          start: "top 90%",
          end: "top 20%",
        })
      })

      const revealImg = gsap.utils.toArray('.reveal_img');
      revealImg.forEach((img, i) => {
        ScrollTrigger.create({
          trigger: img,
          toggleClass: 'active',
          start: "top 60%",
          end: "top 5%",
          // markers: true,
        })
      })