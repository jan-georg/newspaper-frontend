import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { AddButtonComponent } from "./add-button/add-button.component"
import { ArticleGridComponent } from "./article-grid/article-grid.component"
import { ArticleListComponent } from "./article-list/article-list.component"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [CommonModule, RouterOutlet, ArticleListComponent, ArticleGridComponent, AddButtonComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent {
    title = "bewerbung-fe"
}
