import { Component, OnInit, OnChanges } from '@angular/core';
import { HighlightJS } from 'ngx-highlightjs';
// import * as $ from './textarea';

@Component({
  selector: 'app-pokemon-queries',
  templateUrl: './pokemon-queries.component.html',
  styleUrls: ['./pokemon-queries.component.scss']
})
export class PokemonQueriesComponent implements OnInit, OnChanges {


  public textareaContent = 'select * FROM USERS WHER NAME = jAO ';

  constructor(
    private highlightservice: HighlightJS,
  ) { }

  public fullScreen(event: Event) {

    const el = document.getElementById('fullscreen');
    el.classList.toggle('active');
    console.log('lista de classees', el.classList);

    const els = document.getElementsByClassName('editor-holder');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < els.length; i++) {
      els[i].classList.toggle('fullscreen');
    }

    // const container = document.getElementById('textarea-container');
    // container.classList.toggle('fullscreen');
  }

  public escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  public hightlightSyntax() {
    const content = (document.getElementById('highlight-textarea') as HTMLTextAreaElement).value;
    console.log('entrei', content);
    const code = document.getElementById('code-container');
    const escaped = this.escapeHtml(content);
    if (!code) { return; }
    code.innerHTML = escaped;

    const els = document.getElementsByClassName('syntax-highight');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < els.length; i++) {
      this.highlightservice.highlightBlock(els[i] as HTMLElement);
      // hljs.highlightBlock(els[i]);
    }
  }

  ngOnInit() {
    this.hightlightSyntax();
  }

  ngOnChanges(changes): void {
    this.hightlightSyntax();
    // console.log('chamei o onchanges');
    // $.correctTextareaHight(this);
    // $.hightlightSyntax();
  }

}
