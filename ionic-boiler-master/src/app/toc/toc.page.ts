import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Second",
      url: "/chapter2"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
