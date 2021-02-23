import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.scss']
})
export class UserdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
