import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.scss'
})
export class NewAppointmentComponent implements OnInit{
  newAppointmentForm: FormGroup;
  appointmentId: number;
  fullName = localStorage.getItem('fullName');

  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService, 
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(): void {
    this.newAppointmentForm = this.formBuilder.group({
      serviceType: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      officeLocation: ['']
    });
  }

  saveAppointment(): void {
    const appointment = this.newAppointmentForm.value;
    // console.log(appointment);

    // converting input date from YYYY-MM-DD to MM-DD-YYYY:
    let arr = appointment['appointmentDate'].split('-'),
    date = "";
    date += arr[1] + '-' + arr[2] + '-' + arr[0];

    // concatenating date with time for input into db:
    let dateTime = "";
    dateTime += date + 'T' + appointment['appointmentTime'];
    // console.log(dateTime);
    // console.log(appointment);
    delete appointment['appointmentDate'];
    delete appointment['appointmentTime'];
    appointment['appointmentDateTime'] = dateTime;
    console.log(appointment);
    appointment['userId'] = localStorage.getItem('userId');
    
    this.appointmentService.saveAppointment(appointment).subscribe((result: string) => {
      if (result === 'success') {
        alert('Appointment scheduled successfully');
        this.clearForm();
      }
      else if (result === 'Appointment already exists') {
        alert(result);
      }
      else
        alert('Failure scheduling appointment');
    });
  }
}
