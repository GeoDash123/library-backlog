import { Component } from "@angular/core";
import { SearchBarComponent } from "../../components/general/search-bar/search-bar.component";
import { CommonModule } from "@angular/common";

//Alatorre Lopez Jose Carlos
@Component({
    selector: "app-explore",
    imports: [
        CommonModule,
        SearchBarComponent,
    ],
    templateUrl: "./explore.component.html",
    styleUrl: "./explore.component.scss",
})
export class ExploreComponent {
    public test(searchTerm: string) {
        console.log(searchTerm);
    }
}