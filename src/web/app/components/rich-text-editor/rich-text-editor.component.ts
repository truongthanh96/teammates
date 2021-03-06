import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * A rich text editor.
 */
@Component({
  selector: 'tm-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit {

  @Input()
  isDisabled: boolean = false;

  @Input()
  minHeightInPx: number = 150;

  @Input()
  placeholderText: string = '';

  @Input()
  richText: string = '';

  @Output()
  richTextChange: EventEmitter<string> = new EventEmitter();

  // the argument passed to tinymce.init() in native JavaScript
  init: any = {};

  constructor() { }

  ngOnInit(): void {
    this.init = this.getEditorSettings();
  }

  private getEditorSettings(): any {
    return {
      base_url: '/tinymce',
      skin_url: '/tinymce/skins/ui/oxide',
      content_css: '/assets/tinymce/tinymce.css',
      suffix: '.min',
      height: this.minHeightInPx,
      resize: true,
      inline: false,
      relative_urls: false,
      convert_urls: false,
      remove_linebreaks: false,
      placeholder: this.placeholderText,
      plugins: [
        'advlist autolink autoresize lists link image charmap hr anchor',
        'searchreplace wordcount visualblocks visualchars code',
        'insertdatetime nonbreaking save table directionality',
        'emoticons paste textpattern',
      ],
      menubar: false,
      autoresize_bottom_margin: 50,

      toolbar1: 'styleselect | forecolor backcolor '
          + '| bold italic underline strikethrough subscript superscript '
          + '| alignleft aligncenter alignright alignjustify '
          + '| bullist numlist | link image charmap emoticons',
    };
  }

}
