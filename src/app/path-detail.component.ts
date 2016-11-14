import { Component, Input } from '@angular/core';
import { Path } from './path';

@Component({
    selector: "path-detail",
    templateUrl: "./path-detail.component.html"
})

export class PathDetailComponent{
    @Input()
    path: Path;
}