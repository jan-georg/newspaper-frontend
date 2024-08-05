import { Component, computed, inject, Signal } from "@angular/core"
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
    public selectedArticles = inject(DataService).getSelectedArticles();
    public numAddButtons: Signal<unknown[]> = computed(() => {
        const numMaxAddButtons: number = 4;
        const numAddButtons: number = numMaxAddButtons - this.selectedArticles().length;

        if (numAddButtons === 0) {
            return [];
        }

        return new Array(numAddButtons);
    })
}
