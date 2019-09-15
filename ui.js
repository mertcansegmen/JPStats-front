class UI {
    constructor() {
        this.colors = [
            {
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)'
            },
            {
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)'
            },
            {
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)'
            },
            {
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)'
            },
            {
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)'
            },
            {
                backgroundColor: 'rgba(125, 220, 25, 0.6)',
                borderColor: 'rgba(125, 220, 25, 1)'
            }

        ]
    }

    handleSize(listUI, cardUI) {
        cardUI.style.height = listUI.offsetHeight + 2.5 + "px";
    }

    // Set list item selected on click
    handleListSelection() {
        $(function () {
            $('body').on('click', '.list-group-item', function () {
                $('.list-group-item').removeClass('active');
                $(this).closest('.list-group-item').addClass('active');
            });
        });
    }

    createKeywordJumbotron(cardBodyUI, jobPosting) {
        cardBodyUI.innerHTML = `
        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container">
                <h1 class="display-4">${jobPosting.keyword}</h1>
                <p class="lead">There are currently <strong>${jobPosting.count}</strong> job postings related to this keyword.</p>
                <hr class="my-4">
                <p class="small">Based on job postings on <a href="https://tr.indeed.com" target="_blank">tr.indeed.com</a></p>
            </div>
        </div>
        `;
    }

    createMessageJumbotron(cardBodyUI, message) {
        cardBodyUI.innerHTML = `
        <div class="jumbotron jumbotron-fluid bg-white m-0 h-100 p-0">
            <div class="container h-100 p-5">

                <p class="lead text-primary"><strong>${message}</strong></p>
            </div>
        </div>
        `;
    }

    createChart(cardBodyUI, jobPostings) {
        cardBodyUI.innerHTML = `<canvas id="chart" class="h-100"></canvas`;
        
        const keywords = jobPostings.map(element => element.keyword);
        const postCounts = jobPostings.map(element => element.count);
        const randomColorIndex = Math.floor(Math.random() * this.colors.length);

        var ctx = document.querySelector("#chart").getContext('2d');
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: keywords,
                datasets: [{
                    label: "Current Number of Job Postings (Based on job postings on tr.indeed.com)",
                    data: postCounts,
                    backgroundColor: this.colors[randomColorIndex].backgroundColor,
                    borderColor: this.colors[randomColorIndex].borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}