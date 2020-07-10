import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpBlobOptions = {
  headers: new HttpHeaders({ 
    'X-Amz-Content-Sha256': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 
    'X-Amz-Date': '20200710T161057Z', 
    'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIAJXGXBHTXFHL4RRIQ/20200710/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=42d76b1f5a290735a0b6450a9ce0fb003024ceb87eab1cec42c76cccd2c331f4'  
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
