import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  url: string = "./assets/php/form.php";
  // url: string = "http://localhost/angular/form.php";

  constructor(private http: HttpClient) {}

  sendMessage(mail: any) {
    return this.http.post(this.url, JSON.stringify(mail), {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text",
    });
  }
}
