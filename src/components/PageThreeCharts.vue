
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  mounted() {
    this.renderChart(
      {
        labels: ["AGO-20", "SEP-20", "OCT-20", "NOV-20", "DIC-20", "ENE-21"],
        datasets: [
          {
            label: "Presupuesto",
            borderColor: "#FFB300",
            backgroundColor: "#FFB300",
            fill: false,

            data: [60, 50, 40, 30, 20, 10]
          },
          {
            label: "Aprobado",
            borderColor: "#43E0AA",
            backgroundColor: "#43E0AA",
            fill: false,
            data: [10, 20, 30, 40, 50, 60]
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
        title: {
          display: true,
          text: "BALANCE",
          fontFamily: "Arial",
          fontSize: 20
        },
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
                display: false
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