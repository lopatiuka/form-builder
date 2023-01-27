import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormItem } from '../../interfaces/form-item.interface';
import { FormStyles } from '../../interfaces/form-styles.interface';


@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  constructor(private http: HttpClient) {}

  getItems() {
    let result = this.http.get<FormItem[]>('http://localhost:3000/items');
    return result
  }

  getDroppedItems() {
    let result = this.http.get<FormItem[]>('http://localhost:3000/selecteditems');
    return result
  }

  dropItem(body: FormItem) {
    let result = this.http.post<FormItem>('http://localhost:3000/selectedItems', body);
    return result
  }

  updateItem(body: FormItem) {
    let result = this.http.patch<FormItem>(`http://localhost:3000/selectedItems/${ body.id }`, body);
    return result
  }

  deleteItem(id: number) {
    let result = this.http.delete<FormItem>(`http://localhost:3000/selectedItems/${ id }`);
    return result
  }

  getFormStyles() {
    let result = this.http.get<FormStyles>('http://localhost:3000/formStyles');
    return result
  }

  updateFormStyles(body: FormStyles) {
    let result = this.http.patch<FormStyles>('http://localhost:3000/formStyles', body);
    return result
  }
}