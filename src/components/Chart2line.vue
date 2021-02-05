
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  mounted() {
    this.renderChart(
      {
        labels: ["JUL-19", "AGO-19", "OCT-19", "NOV-19", "DIC-19", "ENE-20"],
        datasets: [
          {
            label: "Presupuesto",
            borderColor: "#935CCB",
            backgroundColor: "#935CCB",
            fill: false,

            data: [20, 10, 15, 9, 20, 25]
          },
          {
            label: "Real",
            borderColor: "#43E0AA",
            backgroundColor: "#43E0AA",
            fill: false,
            data: [15, 10, 18, 11, 21, 23]
          }
        ]
      },
      {
        responsive: true,
        layout: {
            padding: {
                left: 0,
                right: 10,
                top: 10,
                bottom: 0
            }
        },
        maintainAspectRatio: false,
        title: { display: true, text: "CONSUMO HISTORICO", fontFamily: "Arial", fontSize:  15 },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    );
  }
};
</script>


