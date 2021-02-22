import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { ArticleProvider } from '../service/article.service';
import '@fortawesome/fontawesome-free/js/all.js';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
@Input() article:any;
@Input() indice:number=0;
a:Article= new Article('',false);


  constructor(private articleService:ArticleProvider) {}

  ngOnInit(): void {
  }

  onSupprimer()
  {
    this.articleService.onSupprimerProvider(this.indice);

  }

  onAcheter()
  {
    this.articleService.onAcheterProvider(this.indice);
  }
}
