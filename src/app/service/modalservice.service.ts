import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {
  showDialog = false;
  showEditDialog = false;
  constructor() { }
}
