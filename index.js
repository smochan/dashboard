console.log("js is added")


var bio = document.getElementById("bio").getContext('2d');
var phy = document.getElementById("phy").getContext('2d');
var chem = document.getElementById("chem").getContext('2d');
var phi = document.getElementById("phi").getContext('2d');

var myChart = new Chart(bio, {
  type: 'doughnut',
  data: {
    labels: ["Finished", "notfinished"],
    datasets: [{
      data: [25, 75], // Specify the data values array

      borderColor: ['#2196f38c', '#afeeee'], // Add custom color border 
      backgroundColor: ['#FFFFFF', '#9FA0A4'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var myChart = new Chart(phy, {
  type: 'doughnut',
  data: {
    labels: ["Finished", "notfinished"],
    datasets: [{
      data: [58, 42], // Specify the data values array

      borderColor: ['#2196f38c', '#afeeee'], // Add custom color border 
      backgroundColor: ['#FFFF00', '#9FA0A4'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var myChart = new Chart(chem, {
  type: 'doughnut',
  data: {
    labels: ["Finished", "notfinished"],
    datasets: [{
      data: [76, 24], // Specify the data values array

      borderColor: ['#2196f38c', '#afeeee'], // Add custom color border 
      backgroundColor: ['#8A2BE2', '#9FA0A4'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var myChart = new Chart(phi, {
  type: 'doughnut',
  data: {
    labels: ["Finished", "notfinished"],
    datasets: [{
      data: [44, 56], // Specify the data values array

      borderColor: ['#2196f38c', '#afeeee'], // Add custom color border 
      backgroundColor: ['#FF0000', '#9FA0A4'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var myChart = new Chart(goals, {
  type: 'doughnut',
  data: {
    labels: ["Completed", "Uncompleted"],
    datasets: [{
      data: [75, 25], // Specify the data values array

      borderColor: ['#2196f38c', '#afeeee'], // Add custom color border 
      backgroundColor: ['#8A2BE2', '#9FA0A4'], // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Last Week', // Name the series
      data: [5, 2, 7, 4, 1, 0, 9], // Specify the data values array
      fill: false,
      borderColor: '#2196ff', // Add custom color border (Line)
      backgroundColor: '#2196ff', // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }, {
      label: 'This week', // Name the series
      data: [3, 7, 2, 1, 8, 5, 6], // Specify the data values array
      fill: false,
      borderColor: '#219600', // Add custom color border (Line)
      backgroundColor: '#219600', // Add custom color background (Points and Fill)
      borderWidth: 1 // Specify bar border width
    }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "2019",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "2020",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }, {
    label: "2021",
    backgroundColor: "rgba(0,200,0,0.2)",
    data: [67, 70, 80, 65, 75, 85]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
});


$("i.edu").on("click", function () {
  $(".icont").addClass("hidden");
  $(".icont.edu").removeClass("hidden");
  $(".icont.edu").removeClass("hidden");
  $("i").removeClass("leftBorder");
  $(this).addClass("leftBorder");

});
$("i.mes").on("click", function () {
  $(".icont").addClass("hidden");
  $(".icont.mes").removeClass("hidden");
  $(".icont.mes").removeClass("hidden");
  $("i").removeClass("leftBorder");
  $(this).addClass("leftBorder");
});
$("i.star").on("click", function () {
  $(".icont").addClass("hidden");
  $(".icont.star").removeClass("hidden");
  $(".icont.star").removeClass("hidden");
  $("i").removeClass("leftBorder");
  $(this).addClass("leftBorder");
});
$("i.bolt").on("click", function () {
  $(".icont").addClass("hidden");
  $(".icont.bolt").removeClass("hidden");
  $(".icont.bolt").removeClass("hidden");
  $("i").removeClass("leftBorder");
  $(this).addClass("leftBorder");
});
$(".subject").on("click", function () {
  $(".subject").removeClass("bgGreen");
  $(this).addClass("bgGreen");
})