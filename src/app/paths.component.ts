import { Component, OnInit } from '@angular/core';
import { Path } from './path';
import { PathService } from './path.service';
 

@Component({
    selector: "path",
    templateUrl: "./paths.component.html",
    styleUrls: ['./paths.component.css'],
})

export class PathsComponent implements OnInit{
    title = "Locales éxito de Medellín";
    paths:Path[];
    selectedPath: Path;

    ngOnInit(){
        this.getPaths();
    }

    getPaths():void{
        this.pathService.getPaths().then(paths => this.paths = paths);
    }

    constructor(private pathService: PathService){}

    onSelect(path:Path): void{
        this.selectedPath = path;
    }
} 