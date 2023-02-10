import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormItem } from '../../../shared/interfaces/form-item.interface';
import { FormStyles } from '../../../shared/interfaces/form-styles.interface';

enum eRoutes {
  items = 'items/',
  selectedItems = 'selectedItems/',
  formStyles = 'formStyles/'
}

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  private cLocalhost = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getItems() {
    const result = this.http.get<FormItem[]>(`${this.cLocalhost}${eRoutes.items}`);
    return result
  }

  getDroppedItems() {
    const result = this.http.get<FormItem[]>(`${this.cLocalhost}${eRoutes.selectedItems}`);
    return result
  }

  dropItem(body: FormItem) {
    const result = this.http.post<FormItem>(`${this.cLocalhost}${eRoutes.selectedItems}`, body);
    return result
  }

  updateItem(body: FormItem) {
    const result = this.http.patch<FormItem>(`${this.cLocalhost}${eRoutes.selectedItems}${ body.id }`, body);
    return result
  }

  deleteItem(id: number) {
    const result = this.http.delete<FormItem>(`${this.cLocalhost}${eRoutes.selectedItems}${ id }`);
    return result
  }

  getFormStyles() {
    const result = this.http.get<FormStyles>(`${this.cLocalhost}${eRoutes.formStyles}`);
    return result
  }

  updateFormStyles(body: FormStyles) {
    const result = this.http.patch<FormStyles>(`${this.cLocalhost}${eRoutes.formStyles}`, body);
    return result
  }
}