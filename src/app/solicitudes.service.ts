import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
export const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`;

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {


  constructor(private httpClient: HttpClient) {
  }

  getSolicitudes() {
    return this.httpClient.get(CONTENTFUL_URL)
      .toPromise()
      .then((x: any) => x.items.map((y: any) => y.fields)
      )
  }
}
