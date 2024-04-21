import { Component } from "@angular/core";
import Chart from 'chart.js/auto';

@Component({
    selector:'views-graph',
    standalone:true,
    template:'<div class="panel">\
        <div class="views-div">Views</div>\
        <h3>6.967.431</h3>\
        <div class="chart-container">\
    <div class="chart-container">\
      <canvas  id="MyChart" >{{ chart }}</canvas>\
    </div>\
    </div>\
        <div class="view-dashboard">\
            <div class="icon"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uynuqf-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DashboardIcon"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg></div>\
        <div class="view-dashboard-text">View Dashboard</div>   \
        <a class = "right-sign-container" href="">\
    <svg class="right-sign" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ChevronRightIcon"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>\
    </a>\
    </div>\
    </div>',
    styles:'.panel{width:100%; background-color:white; border-radius:16px; margin-bottom:15px;align-items: center; padding-top:20px; padding-bottom:20px;  text-align: center; color:rgb(69, 90, 100);}\
    .views-div{font-family: Nunito, sans-serif; font-weight: 400; font-size: 0.875rem; line-height: 1.43;}\
    .panel h3{font-family: Nunito, sans-serif;font-weight: 800; font-size: 1.5rem; line-height: 1.2;}\
   .view-dashboard{display:flex; background-color:rgb(236,239,241); margin:20px; border-radius:15px;} \
   .icon{background-color:white; width:40px; height:40px; margin:25px;margin-right:10px; border-radius:50%;display: flex;  align-items: center;  justify-content: center; }\
    svg{width:24px; height:24px}\
    .view-dashboard-text{margin:30px; margin-left:0; color: rgb(69, 90, 100); font-family: Nunito, sans-serif; font-weight: 700; font-size: 1rem; line-height: 1.6; letter-spacing: 0px;}\
    path{fill:rgb(69,90,100)}\
    .right-sign{width:24px; height:24px;}\
    .right-sign-container{width:40px; height:40px; margin-left:auto; margin-right:25px; margin-top:25px;border-radius:50%;display:flex;  align-items: center; justify-content: center;}\
    .right-sign-container:hover{background-color:rgb(211, 218, 223)}\
    .chart-container{}\
    \
    '
})
export class ViewsGraphComponent{
    public chart: any;
    ngOnInit(): void {
        this.createChart();
      }

    createChart(){
  
        this.chart = new Chart("MyChart", {
          type: 'line', //this denotes tha type of chart,
          options: {
            maintainAspectRatio: true,
            interaction:{
                mode:"nearest",
                intersect:false
            },
            plugins: {
                tooltip:{
                    callbacks: {
                        label : function(context){
                            let label = "";
                            label += 'fb: ';
                            if (context.parsed.y !== null) {
                                label +=context.parsed.y;
                            }
                            return label;
                    }},
                    position: 'nearest',
                    enabled:true,
                    backgroundColor: "white",
                    cornerRadius:2,
                    bodyColor: "rgb(41,98,255)", 
                    displayColors:false,
                    titleColor:"grey",
                    titleFont:{size:15},
                    bodyFont:{size:15}
                },
                legend: {
                    display: false
                }
            },
            elements: {
                point:{
                    radius: 1
                }
            },
            scales: {
                x:{
                    grid:{
                    display:false
                }},
                y: {
                    display:false,
                    ticks: {
                        display: false
                    },
                    grid:{
                        display:false
                    }
                }
            }
        },
          data: {// values on X-Axis
            labels: ['Jan','Feb', 'Mar', 'Avr' ], 
           datasets: [
              {
                data: ['2.5','1.4', '6', '4'],
                borderColor: 'rgb(41,98,255)',
                borderWidth:7,
                backgroundColor:'rgb(191,208,255)',
                fill:true,
                tension:0.15
              }  
            ]
          }          
        });
      }
}