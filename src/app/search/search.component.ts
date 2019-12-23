import { Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatSelectModule,
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatTableDataSource
} from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import { SearchService } from '../search.service';
import { BankHttpService } from "../bank-http.service";
import { DataSource } from "@angular/cdk/table";

interface Branch {
  address: string;
  bank_id: number;
  bank_name: string;
  branch: string;
  city: string;
  district: string;
  ifsc: string;
  state: string;
}

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  displayedColumns = ["bank_name", "bank_id", "address", "ifsc", "district" ,"action"];
  dataSource;
  public myCity = ["MUMBAI", "CHENNAI", "BANGALORE", "HYDERABAD", "PUNE"];
  filterValue:string;
  city = 'MUMBAI';
  favouriteBankArray=[];
  viewFavoriteBank=[];
  loader;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _bankHttpService: BankHttpService,
    private router: Router
  ) {
    this.onCityResponse('MUMBAI');
  }

  ngOnInit(){
    if(localStorage.getItem('favoriteBanks')){

      this.favouriteBankArray = JSON.parse(localStorage.getItem('favoriteBanks'));
      console.log('favouriteBankArray...ngOnInit',this.favouriteBankArray);
    }
  }

  onCityResponse(cityName){
    this.loader = true;
    this._bankHttpService.getBankBranches(cityName).subscribe(branches => {
      console.log('branches..test',branches);
      for(let favorite of this.favouriteBankArray){
        for(let branch of branches){
          if(favorite.city === this.city && favorite.bankCode === branch.ifsc){
            branch.favorite = true;
            this.viewFavoriteBank.push(branch);
            
          }
        }
      }
      this.dataSource = new MatTableDataSource<Branch>(branches);
      this.dataSource.paginator = this.paginator;
      this.loader = false;
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); // Remove whitespace and to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  onSelectCity(event){
    this.city = event.value;
    console.log('onSelectCity',event.value);
    this.onCityResponse(event.value);
  }


  onFilter() {
    console.log('onFilter..called',);
  }


  onFavouiteBank(bankFavourited,element) {
    console.log('test...',bankFavourited,this.city);
    element.favorite = true;
    this.favouriteBankArray.push({city:this.city,bankCode:bankFavourited});
    localStorage.setItem('favoriteBanks',JSON.stringify(this.favouriteBankArray));
  }

  onFavoriteList() {
    console.log('viewFavoriteBank..test',this.viewFavoriteBank);
    this.dataSource = new MatTableDataSource<Branch>(this.viewFavoriteBank);
      this.dataSource.paginator = this.paginator;
  }
}
