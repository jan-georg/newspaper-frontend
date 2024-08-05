import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common";
import { DataService } from "../services/data.service";

@Component({
    selector: "app-add-button",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./add-button.component.html",
    styleUrl: "./add-button.component.css"
})
export class AddButtonComponent {
    #dataService = inject(DataService)

    public addSelectedArticle() {
        this.#dataService.addSelectedArticle();
    }
}
