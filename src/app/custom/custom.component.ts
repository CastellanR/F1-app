import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  seasons: [String];
  drivers: [String];
  positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  constructors: [String];
  circuits: [String];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://ergast.com/api/f1/drivers.json?limit=900').subscribe( res =>
      this.drivers = res.MRData.DriverTable.Drivers
    );
    this.http.get('http://ergast.com/api/f1/seasons.json?limit=90').subscribe( res =>
      this.seasons = res.MRData.SeasonTable.Seasons
    );
    this.http.get('http://ergast.com/api/f1/constructors.json?limit=900').subscribe( res =>
      this.constructors = res.MRData.ConstructorTable.Constructors
    );
    this.http.get('http://ergast.com/api/f1/circuits.json?limit=900').subscribe( res =>
      this.circuits = res.MRData.CircuitTable.Circuits
    );

  }

}