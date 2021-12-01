import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InputTextService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getNumberTimesWordRepeated(inputText: string): any {
    return this.http.get(
      this.API_URL + `/home/GetNumberTimesWordRepeated/${inputText}`
    );
  }
}
