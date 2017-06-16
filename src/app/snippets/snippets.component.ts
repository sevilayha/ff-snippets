import { Snippet } from './../shared/model/snippet';
import { SnippetService } from './../shared/services/snippet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cwiki-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit{
  title = 'comments';
  snippets: Snippet
  
  constructor(private snippetService:SnippetService){
  }

  ngOnInit(){
    this.snippetService.getSnippets()
      .subscribe(snippets => {
        this.snippets = snippets;
        console.log(this.snippets);
      });
  }
}
