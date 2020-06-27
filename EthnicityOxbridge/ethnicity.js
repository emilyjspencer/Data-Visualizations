new Chart(document.getElementById("graph1"), {
    type: 'pie',
    data: {
      labels: ["Black", "Bangladeshi or Pakistani", "Asian", "Mixed Heritage", "White"],
      datasets: [{
        label: "Ethnicity of students",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [1.9, 1.7, 6.5, 6.6, 83.3]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Ethnicity of students enrolled at Oxford or Cambridge University in 2017'
      }
    }
});