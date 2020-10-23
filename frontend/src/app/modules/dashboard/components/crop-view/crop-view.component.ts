import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { Crop } from 'src/app/shared/models/crop';
import { CropService } from 'src/app/shared/services/crop.service';

@Component({
  selector: 'app-crop-view',
  templateUrl: './crop-view.component.html',
  styleUrls: ['./crop-view.component.css']
})
export class CropViewComponent implements OnInit, OnDestroy {

  id: string;
  crop: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private cropService: CropService,
  ) { }

  ngOnInit(): void {
    this.crop = []
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id
      this.getCropDetails(this.id)
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getCropDetails(id) {
    this.cropService.getCropById(id).pipe(first())
      .subscribe((cropData) => {
        this.crop = cropData;
      },
        error => {
          console.log(error);
        });
  }

}
