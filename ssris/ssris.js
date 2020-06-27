new Chart(document.getElementById("graph1"), {
    type: "doughnut",
    data: {
        labels: ["Citalopram(Celexa)", "Fluoxetine(Prozac)", "Escitalopram(Lexapro)", "Sertraline(Zoloft)", "Paroxetine(Paxil)"],
        datasets: [
            {
              label: "Distribution of the most commonly prescribed Selective Serotonin Reuptake Inhibitors used among women whose baby did not have a birth defect",
              backgroundColor: ["#ffccff", "#e6ccff", "#bf80ff", "#ccccff", "#ccffff"],
              data: [0.1, 0.26, 0.09, 0.4, 0.15]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Distribution of the most commonly prescribed Selective Serotonin Reuptake Inhibitors used among women whose baby did not have a birth defect'
          }
        }
    });
            