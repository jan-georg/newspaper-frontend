import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common";
import { DataService } from "../services/data.service";
import { Article } from "../../../build/openapi/models/article";
import { AddButtonComponent } from "../add-button/add-button.component";
import { ArticleBoxComponent } from "../article-box/article-box.component";

@Component({
    selector: "app-article-grid",
    standalone: true,
    imports: [CommonModule, AddButtonComponent, ArticleBoxComponent],
    templateUrl: "./article-grid.component.html",
    styleUrl: "./article-grid.component.css"
})
export class ArticleGridComponent {
    #dataService = inject(DataService)

    public getSelectedArticles(): Article[] {
        return this.#dataService.getSelectedArticles();
    }

    public getNumAddButtons(): unknown[] {
        const numMaxAddButtons: number = 4;
        const numAddButtons: number = numMaxAddButtons - this.#dataService.getSelectedArticles().length;

        if (numAddButtons === 0) {
            return [];
        }

        return new Array(numAddButtons);
    }
}
