import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase-service.service';
import { Chart } from 'chart.js';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit{
  chart: any;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getReservationsByMonth().subscribe((data: Reservation[]) => {
      const months: string[] = []; // Array para nombres de meses
      const reservations: number[] = []; // Array para contar reservas por mes

      // Agrupar reservas por mes
      data.forEach((reservation: Reservation) => {
        if (reservation.arrivalDate) {
          const month = reservation.arrivalDate.getMonth(); // Obtener el mes (0-11)

          if (months[month]) {
            reservations[month]++;
          } else {
            months[month] = this.getMonthName(month); // Obtener nombre del mes
            reservations[month] = 1;
          }
        }
      });

      // Crear el gráfico usando Chart.js
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Reservations per Month',
              data: reservations,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }

  private getMonthName(monthNumber: number): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthNumber];
  }
}
 