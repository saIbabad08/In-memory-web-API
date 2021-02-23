import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserdialogComponent } from '../userdialog/userdialog.component';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UserService ) {
  }

  dataLength : any ;
  newDataID: any;
  dataValue:any;
  userDataDb: any[] =[];


  // initialize pagination
  length = 5;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe(userDataDb => {
        console.log(userDataDb);
        this.userDataDb = userDataDb;
        this.reloadData();
      });
      
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataLength = this.userDataDb.length;
  }


    actionEdit(data){
      alert(this.userDataDb[data-1].todo);
    }

    actionDelete(data){
    this.userService.deleteUser(data).subscribe((res)=>{
      this.getUser();

    })
  }

  openDialog(data): void {
    let currentID = data - 1;

    this.newDataID = Math.max.apply(Math,this.userDataDb.map(newID => newID.id));
    
    if(!data){
       this.dataValue = {id:this.newDataID+1, userName:'', email:""}
    }else{
      this.dataValue = this.userDataDb[currentID];
    }

    let dialogRef = this.dialog.open(UserdialogComponent, {
      width: '250px',
      data: this.dataValue
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(!data){
          this.userService.addUser(result).subscribe((res)=>{
           this.getUser();
          });

        }else{
          this.userService.updateUser(result).subscribe((res)=>{
            this.getUser();
          }) 
        }
      }
      this.reloadData();
    });
  }

  
  reloadData(){
    this.dataSource = new MatTableDataSource(this.userDataDb);
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns = ['id', 'userName', 'email',  'action'];
  dataSource = new MatTableDataSource(this.userDataDb);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}






