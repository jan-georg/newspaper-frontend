import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Article } from "../../../build/openapi/models/article";
import { DataService } from "../services/data.service";

@Component({
    selector: "app-article-box",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./article-box.component.html",
    styleUrl: "./article-box.component.css"
})
export class ArticleBoxComponent {
    private _article?: Article = undefined;

    constructor(private articleService: DataService) {}

    @Input()
    set article(article: Article) {
        this._article = article;
    }

    get article(): Article {
        return this._article!;
    }

    public removeArticle(article: Article) {
        this.articleService.removeArticle(article);
    }
}
