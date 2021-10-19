import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibSharedService {

  constructor() {}

  public logService() {
    console.log('you are using lib service')
  }
}
