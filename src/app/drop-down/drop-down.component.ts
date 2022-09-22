import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"],
})
export class DropDownComponent implements OnInit {
  public search = "";
  public options: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  valueChanged(newValue) {
    if (!newValue) {
      this.options = [];
      return;
    }

    this.httpClient
      .get(`http://openlibrary.org/search.json?q=${newValue}&fields=title`)
      .subscribe({
        next: (resp: any) => (this.options = resp.docs),
        error: (err: Error) => console.log(err),
      });
  }
}
