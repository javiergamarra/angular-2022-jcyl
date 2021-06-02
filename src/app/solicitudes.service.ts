import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient: HttpClient) {
  }

  getSolicitudes() {
    const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise()
      .then((x: any) =>
        x.items.map((y: any) => y.fields)
      )
  }
}
