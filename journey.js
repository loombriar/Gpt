(() => {
  const journey = document.getElementById("journey");
  const chaser = document.getElementById("pathChaser");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const points = [[50,3],[33,13],[45,25],[31,38],[24,49],[43,60],[42,71],[36,82],[51,96]];
  let ticking = false;

  function placeChaser() {
    ticking = false;
    if (!journey || !chaser || reducedMotion.matches) return;
    const rect = journey.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / travel));
    const scaled = progress * (points.length - 1);
    const index = Math.min(points.length - 2, Math.floor(scaled));
    const amount = scaled - index;
    const start = points[index];
    const end = points[index + 1];
    const x = start[0] + (end[0] - start[0]) * amount;
    const y = start[1] + (end[1] - start[1]) * amount;
    chaser.style.setProperty("--path-x", x + "%");
    chaser.style.setProperty("--path-y", y + "%");
    chaser.style.transform = "translate(-50%,-50%) rotate(" + ((end[0] - start[0]) * .35) + "deg)";
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(placeChaser);
  }

  window.addEventListener("scroll", requestUpdate, {passive:true});
  window.addEventListener("resize", requestUpdate);
  if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", requestUpdate);
  requestUpdate();
})();

