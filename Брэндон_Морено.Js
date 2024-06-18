document.addEventListener("DOMContentLoaded", function() {
    // Win/Loss Chart
    var ctxWinLoss = document.getElementById('winLossChart').getContext('2d');
    new Chart(ctxWinLoss, {
        type: 'pie',
        data: {
            labels: ['Победы', 'Поражения', 'Ничьи'],
            datasets: [{
                data: [21, 6, 2],
                backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Method of Victory Chart
    var ctxMethod = document.getElementById('methodChart').getContext('2d');
    new Chart(ctxMethod, {
        type: 'bar',
        data: {
            labels: ['Нокауты', 'Сабмишены'],
            datasets: [{
                label: 'Метод победы',
                data: [5, 11],
                backgroundColor: ['#3e95cd', '#8e5ea2']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
