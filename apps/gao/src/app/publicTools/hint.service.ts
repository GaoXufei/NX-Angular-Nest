import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HintService {
  constructor(private readonly snackBar: MatSnackBar) {}

  public snackOpen(
    message: string,
    close: string = 'close',
    duration: number = 5000,
    horizontalPosition: MatSnackBarHorizontalPosition = 'left',
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  ) {
    this.snackBar.open(message, close, {
      duration,
      horizontalPosition,
      verticalPosition
    });
  }
}
