import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  /**
   * Otevře SnackBar
   * @link https://material.angular.io/components/snack-bar/overview
   *
   * @param message
   * @param action
   * @param config
   */
  openSnackbar(message: string, action?: string, config?: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }
}
