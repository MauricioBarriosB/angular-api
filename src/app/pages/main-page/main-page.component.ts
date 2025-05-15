import { Component, HostListener  } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../../interfaces/doctor.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
    selector: 'app-main-page',
    imports: [CardComponent],
    template: ` 
            <h2>Doctors API</h2> 
            <input type="text" placeholder="Buscar..." (input)="filter($event)"> 
            @for (doctor of doctors; track doctor.id) {
                <app-card [doctor]="doctor"/>
            }`
})

export class MainPageComponent {
    doctors: Doctor[] | undefined; // ** Persistent data
    doctorsFilter: Doctor[] | undefined;

    constructor(private http: HttpClient) {
        this.getData();
    }

    async getData() {
        this.http.get<any>(environment.apiUrl).subscribe(res => {
            // ** Desectructuring Map:
            this.doctors = res.map(({ id, fname, photo }: Doctor) => {
                return {
                    id: id,
                    fname: fname,
                    photo: photo
                }
            });
            this.doctorsFilter = this.doctors;
            // console.table(this.doctorsFilter); 
        });
    }

    filter(e: any) {
        let search: string = e.target.value;
        this.doctors = this.doctorsFilter?.filter(({ fname }: Doctor) => {
            return fname.toLowerCase().includes(search.toLowerCase());
        });
    }

    @HostListener('window:scroll', ['$event'])onScroll(event: Event): void {
        console.log(event.target); 
    }
}