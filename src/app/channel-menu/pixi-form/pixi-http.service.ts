import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpBlobOptions = {
  headers: new HttpHeaders({ 
    'X-Amz-Content-Sha256': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 
    'X-Amz-Date': '20200708T134957Z', 
    'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIAJXGXBHTXFHL4RRIQ/20200708/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=73749576d941337843ccae66c26ad00a9bbb57d8bf9bc460b8dc1461b975a9cd'
  }),
  responseType: 'blob' as 'json'
};


@Injectable({
  providedIn: 'root'
})
export class PixiHttpService {

  constructor(private http: HttpClient) {
  }
  
  getImage(filename: string){
    return this.http.get<Blob>(`https://pixi-images.s3.amazonaws.com/${filename}`, httpBlobOptions)
  }

}
