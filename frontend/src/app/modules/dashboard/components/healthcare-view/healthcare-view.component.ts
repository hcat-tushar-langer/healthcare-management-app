import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { HealthcareService } from 'src/app/shared/services/healthcare.service';

@Component({
  selector: 'app-healthcare-view',
  templateUrl: './healthcare-view.component.html',
  styleUrls: ['./healthcare-view.component.css']
})
export class HealthcareViewComponent implements OnInit, OnDestroy {

  id: string;
  healthcare: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private healthcareService: HealthcareService,
  ) { }

  ngOnInit(): void {
    this.healthcare = []
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id
      this.getHealthcareDetails(this.id)
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getHealthcareDetails(id) {
    this.healthcareService.getHealthcareById(id).pipe(first())
      .subscribe((healthcareData) => {
        this.healthcare = healthcareData;
      },
        error => {
          console.log(error);
        });
  }

}
