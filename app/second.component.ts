import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "second",
    template: `
        <StackLayout>
            <Label text="Second component" class="title"></Label>
            <Button text="GO TO FIRST" [nsRouterLink]="['/first']" class="link"></Button>
        </StackLayout>
    `
})
export class SecondComponent {
    constructor(private page:Page){
        // this.page.enableSwipeBackNavigation  = false;
    }
 }