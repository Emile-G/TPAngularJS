import { Component } from '@angular/core';
import { Article } from './models/article';
import { ArticleProvider } from './service/article.service';
import '@fortawesome/fontawesome-free/js/all.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  achete: boolean = false;
  listeCourses:Article[]= [];
  constructor(private articleProvider :ArticleProvider){}

  ngOnInit()
  {
    if(localStorage.articles != undefined)
    {
       this.listeCourses = JSON.parse(localStorage.articles);
    }
    this.articleProvider.listeCourses = this.listeCourses;
  }

  onAjouter()
  {
    let article = new Article(this.name, this.achete);
    if (article.nom.trim() != '') {
      this.listeCourses.push(article);
      this.articleProvider.saveToLocalStorage();
    };
    this.name = '';
    this.achete = false;
  }
}
