import { Article } from "../models/article";

export class ArticleProvider{

  listeCourses: Article[] = [];

    onAjouterProvider(article: Article) {
      this.listeCourses.push(article);
    }
    
    onSupprimerProvider(i:number)
    {
      this.listeCourses.splice(i,1);
      this.saveToLocalStorage();
    }
   
    onAcheterProvider(i:number)
    {
      if(this.listeCourses[i].achete == false) {
        this.listeCourses[i].achete = true;   
      } else {
        this.listeCourses[i].achete = false;   
      }
      this.saveToLocalStorage();
    }
    saveToLocalStorage()
    {
      localStorage.articles = JSON.stringify(this.listeCourses);
    }
}
