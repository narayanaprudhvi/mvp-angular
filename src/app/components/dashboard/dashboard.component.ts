import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // document.addEventListener("DOMContentLoaded", function () {
  //   var modeSwitch = document.querySelector(".mode-switch");

  //   modeSwitch.addEventListener("click", function () {
  //     document.documentElement.classList.toggle("dark");
  //     modeSwitch.classList.toggle("active");
  //   });

  //   var listView = document.querySelector(".list-view");
  //   var gridView = document.querySelector(".grid-view");
  //   var projectsList = document.querySelector(".project-boxes");

  //   listView.addEventListener("click", function () {
  //     gridView.classList.remove("active");
  //     listView.classList.add("active");
  //     projectsList.classList.remove("jsGridView");
  //     projectsList.classList.add("jsListView");
  //   });

  //   gridView.addEventListener("click", function () {
  //     gridView.classList.add("active");
  //     listView.classList.remove("active");
  //     projectsList.classList.remove("jsListView");
  //     projectsList.classList.add("jsGridView");
  //   });

  //   document
  //     .querySelector(".messages-btn")
  //     .addEventListener("click", function () {
  //       document.querySelector(".messages-section").classList.add("show");
  //     });

  //   document
  //     .querySelector(".messages-close")
  //     .addEventListener("click", function () {
  //       document.querySelector(".messages-section").classList.remove("show");
  //     });
  // });

  profileMainn = false;
  dashboardmainn = true
  showProfile() {
   this.profileMainn = true;
   this.dashboardmainn = false;
  }

  backToDashBoard() {
    this.profileMainn = false;
    this.dashboardmainn = true; 
  }
}
