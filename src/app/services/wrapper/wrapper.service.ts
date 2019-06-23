import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WrapperEndpoints } from './wrapper.endpoints';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public async getDbData(query: string): Promise<any> {
    const endpoint = WrapperEndpoints.db();

    const params = new HttpParams({
      fromObject: {
        sql: query,
      },
    });

    const res = await this.httpClient.get<any>(endpoint, { params }).toPromise();
    return res;
  }

}
