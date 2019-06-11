import { Component } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  ngOnInit() {
    $(document).ready(function() {
      $("#moveleft").click(function() {
        $("#textbox").animate({
          marginLeft: "-=20px" //moves left
        });
      });
      $("#moveright").click(function() {
        $("#textbox").animate({
          marginLeft: "+=20px" //moves right
        });
      });
      $("#movedown").click(function() {
        $("#textbox").animate({
          marginTop: "+=20px" //moves down
        });
      });
      $("#moveup").click(function() {
        $("#textbox").animate({
          marginTop: "-=20px" //moves up
        });
      });
    });
  }
}
