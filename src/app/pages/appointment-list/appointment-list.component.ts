import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit{
  constructor() {}
  fullName: string = localStorage.getItem('fullName');
  valueOfIsAdmin: string = localStorage.getItem('isAdmin');
  isAdmin = (this.valueOfIsAdmin === 'true')


  ngOnInit(): void {
  }
}
