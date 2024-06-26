import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase-service.service';
import { Chart } from 'chart.js/auto';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit{
  chart: any;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getReservationsByMonth().subscribe((data: any) => {
      const months: string[] = [];
      const reservations: number[] = [];

      Object.keys(data).forEach(key => {
        const month = parseInt(key, 10); // convierte la clave en el num del mes
        if (!isNaN(month)) {
          months.push(this.getMonthName(month)); //nombre month
          reservations.push(data[key]); // num reservas per month
        }
      });

      // crea el gráfico con chartjs
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Reservations per Month',
              data: reservations,
              backgroundColor: '#f44336',
              borderColor: '#f44336',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'white', 
                font: {
                  size: 14
                }
              }
            },
            y: {
              ticks: {
                color: 'white', 
                font: {
                  size: 14
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'white', 
                font: {
                  size: 14
                }
              }
            }
          }
        }
      });
    });
  }

  private getMonthName(monthNumber: number): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthNumber - 1];
  }
}
 