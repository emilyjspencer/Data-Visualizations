
function showGraph(data, labels) {
var context = document.getElementById('graph1').getContext('2d');
var chart = new Chart(context, {
    type: 'bar',

    data: {
      labels: labels,
      datasets: [{
          label: 'Most common mental health disorders among UK adults',
          data: data,
          backgroundColor: 'rgb(225, 99, 132)',
          borderColor: 'rgb(225, 99, 132)',
         
     
      }]
    },
});
}


$("#show").click(
    function () {
        data = [5.9, 3.3, 2.4, 1.3, 0.6, 7.8]
        labels = ['Anxiety', 'Depression', 'Phobias', 'OCD', 'Panic Disorder', 'CMD-NOS']
        showGraph(data, labels);
    }
);