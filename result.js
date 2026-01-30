// Get AI percentage from upload page
const aiPercent = sessionStorage.getItem("aiResult") || 75;
document.getElementById("aiPercent").innerText = aiPercent;

// Dummy frame-wise data
const frames = ["F1","F2","F3","F4","F5","F6","F7"];
const values = frames.map(() =>
  Math.floor(Number(aiPercent) - 10 + Math.random() * 20)
);

// Get canvas
const ctx = document.getElementById("aiGraph").getContext("2d");

// Draw graph
new Chart(ctx, {
  type: "line",
  data: {
    labels: frames,
    datasets: [{
      label: "AI Probability %",
      data: values,
      borderColor: "#ff7a00",
      backgroundColor: "rgba(255,122,0,0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  }
});

