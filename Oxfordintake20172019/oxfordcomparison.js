function showData(data, labels) {
    var context = document.getElementById("graph1").getContext('2d');
    var chart = new Chart(context, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Student Intake 2017',
                data: data,
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
