function showData(data, labels) {
    var context = document.getElementById("graph1").getContext('2d');
    var chart = new Chart(context, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                  label: 'Student Intake 2015',
                  data: data[0],
                  backgroundColor: 'rgba(100, 134, 234, 0.2)',
                  borderColor: 'rgba(128, 23, 30, 1)',
                },
                {
                  label: 'Student Intake 2019',
                  data: data[1],
                  backgroundColor: 'rgba(200, 145, 189, 0.2)',
                  borderColor: 'rgba(159, 242, 245, 1)',
                }
            ]
        },
    });
        
}

function getData() {
    $("#message").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: "http://localhost:3000/data",
        success: function (result) {
            $("#message").html("");
            var data = [];
            data.push(result.StudentIntake2015);
            data.push(result.StudentIntake2019);
            var labels = result.labels;
            showData(data, labels);  
        },
        error: function (err) {
            $("#message").html("Error");
        }
    });
}


$("#show").click(
    function () {
      getData();
    }
);
