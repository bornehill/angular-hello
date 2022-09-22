import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DropDownComponent } from "./drop-down/drop-down.component";

@NgModule({
  declarations: [DropDownComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [DropDownComponent],
})
export class AppModule {}
