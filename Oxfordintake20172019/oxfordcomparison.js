function showData(data, labels) {
    var context = document.getElementById("graph1").getContext('2d');
    var chart = new Chart(context, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Student Intake 2017',
                data: data,
                backgroundColor: 'rgba(100, 134, 234, 0.2)',
                borderColor: 'rgba(65, 121, 121, 1)',
            }]
        },
  });
}

$("#show").click(
    function () {
        data = [ 1.9, 1.7, 6.5, 6.6, 83.3];
        labels = ["Black", "Bangladeshi/Pakistani", "Asian", "Mixed Heritage", "White"];
        showData(data, labels);
    }
);
