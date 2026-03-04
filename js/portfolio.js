(async function () {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  try {
    const res = await fetch("content/portfolio.json", { cache: "no-store" });
    const json = await res.json();
    const items = Array.isArray(json) ? json : (json.items || []);

    grid.innerHTML = items.map((it) => `
      <div class="col-md-4">
        <div class="bg-white rounded-xxl shadow-soft h-100 card-hover portfolio-card overflow-hidden reveal">
          <img src="${it.image}" alt="${it.title}" loading="lazy">
          <div class="p-4">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 tag">${it.tag}</span>
              <span class="text-muted small">${it.duration || ""}</span>
            </div>
            <div class="fw-bold mb-1">${it.title}</div>
            <div class="text-muted small mb-3">${it.desc || ""}</div>
            <a href="#order" class="btn btn-primary rounded-pill px-4">Buat yang Mirip</a>
          </div>
        </div>
      </div>
    `).join("");
  } catch (e) {
    grid.innerHTML = `<div class="col-12"><div class="p-4 bg-light rounded-xxl text-muted">
      Portofolio belum bisa dimuat. Pastikan file <b>content/portfolio.json</b> ada.
    </div></div>`;
  }
})();
