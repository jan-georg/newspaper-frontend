import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataService } from "../services/data.service";
import { Article } from "../../../build/openapi/models/article";

@Component({
    selector: "app-article-list",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./article-list.component.html",
    styleUrl: "./article-list.component.css"
})
export class ArticleListComponent {
    constructor(private dataService: DataService) {}

    public getArticles() {
        return this.dataService.getArticles();
    }

    public selectArticle(article: Article) {
        this.dataService.selectArticle(article);
    }

    public isSelected(article: Article): boolean {
        return article.id === this.dataService.getSelectedArticle()?.id;
    }

    public isAlreadyUsed(article: Article): boolean {
        return Boolean(this.dataService.getSelectedArticles().find((a) => a.id === article.id));
    }
}
