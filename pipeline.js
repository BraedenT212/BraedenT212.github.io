(() => {
  const stops = [...document.querySelectorAll('.pipeline-stop')];
  const descriptions = [
    'Learning to listen, solve problems, and deliver a great customer experience.',
    'From restaurant operations to recruiting 12+ students as an SSP ambassador.',
    'Connecting Salesforce, Google Forms, and Power BI to support student recruiting.',
    'Looking ahead to a summer 2027 internship in sales, business development, or technology.'
  ];
  const sections = [...document.querySelectorAll('details.section')];
  const detail = document.querySelector('.pipeline-detail');
  function select(stage) {
    stops.forEach((stop, index) => {
      stop.classList.toggle('is-active', index === stage);
      stop.setAttribute('aria-pressed', String(index === stage));
    });
    detail.textContent = descriptions[stage];
  }
  stops.forEach((stop, stage) => stop.addEventListener('click', () => select(stage)));
  sections.forEach((section, index) => section.addEventListener('toggle', () => {
    if (section.open) select([1, 2, 0][index]);
  }));
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      if (distance > 100) select(Math.min(3, Math.floor(window.scrollY / distance * 4)));
      scheduled = false;
    });
  }, { passive: true });
})();
