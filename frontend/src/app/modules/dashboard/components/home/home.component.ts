import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService, UserService } from 'src/app/shared/services';
import { HealthcareService } from 'src/app/shared/services/healthcare.service';
import { Healthcare } from 'src/app/shared/models/healthcare';
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
  currentUserHealthcare: Healthcare;
  clickedHealthcare: Healthcare;

  healthcare: any;
  dataSource: any;
  displayedColumns: string[] = ['image', 'name', 'website'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  private authSubscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private healthcareService: HealthcareService) {
    this.authSubscription = this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.healthcare = [];
  }

  ngOnInit() {
    this.getCurrentUserHealthcare();
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

  getHealthcareRecord(data) {
    this.clickedHealthcare = data;
    this.router.navigate(['/healthcare', this.clickedHealthcare.id]);
  }

  getCurrentUserHealthcare() {
    this.userService.getUserById(this.currentUser.id).pipe(first())
      .subscribe((userData: User) => {
        this.getHealthcareData(userData.healthcare)
      },
        error => {
          console.log(error);
        });
  }

  getHealthcareData(healthcareIds) {
    if (healthcareIds) {
      for (const healthcareId of healthcareIds) {
        this.healthcareService.getHealthcareById(healthcareId).pipe(first())
          .subscribe((healthcareData: Healthcare) => {
            this.healthcare.push(healthcareData);
            this.dataSource = new MatTableDataSource(this.healthcare);
            this.tableFeatures();
          },
            error => {
              console.log(error);
            });
      }
    }
  }

}
