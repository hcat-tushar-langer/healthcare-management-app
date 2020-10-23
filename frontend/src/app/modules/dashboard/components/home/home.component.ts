import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService, UserService } from 'src/app/shared/services';
import { CropService } from 'src/app/shared/services/crop.service';
import { Crop } from 'src/app/shared/models/crop';
import { User } from 'src/app/shared/models';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser: User;
  currentUserCrops: Crop;
  clickedCrop: Crop;

  crops: any;
  dataSource: any;
  displayedColumns: string[] = ['image', 'name', 'website'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private authSubscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private cropService: CropService) {
    this.authSubscription = this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.crops = [];
  }

  ngOnInit() {
    this.getCurrentUserCrops();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  tableFeatures() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCropRecord(data) {
    this.clickedCrop = data;
    this.router.navigate(['/crop', this.clickedCrop.id]);
  }

  getCurrentUserCrops() {
    this.userService.getUserById(this.currentUser.id).pipe(first())
      .subscribe((userData: User) => {
        this.getCropData(userData.crop)
      },
        error => {
          console.log(error);
        });
  }

  getCropData(cropIds) {
    if (cropIds) {
      for (const cropId of cropIds) {
        this.cropService.getCropById(cropId).pipe(first())
          .subscribe((cropData: Crop) => {
            this.crops.push(cropData);
            this.dataSource = new MatTableDataSource(this.crops);
            this.tableFeatures();
          },
            error => {
              console.log(error);
            });
      }
    }
  }

}
