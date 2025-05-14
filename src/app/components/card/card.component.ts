import { Component, Input } from '@angular/core';
import   {Doctor} from '../../interfaces/doctor.interface';

@Component({
  selector: 'app-card',
  imports: [],
  template: `<div>
                <h3>{{doctor.fname}}</h3>
                <img src={{doctor.photo}} style="width:300px; display: block;">
            </div>`,
})

export class CardComponent {
    @Input() doctor!: Doctor;
}