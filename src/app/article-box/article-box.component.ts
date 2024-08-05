import { Component, inject, input } from "@angular/core"
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
    public article = input.required<Article>()
    #dataService = inject(DataService)

    public removeArticle(): void {
        this.#dataService.removeArticle(this.article());
    }
}
