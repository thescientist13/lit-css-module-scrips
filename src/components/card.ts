import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import sheet from './card.css' with { type: 'css'};

@customElement('x-card')
export class Card extends LitElement {

  @property()
  accessor title: string;

  @property()
  accessor thumbnail: string;

  static styles = [sheet];

  constructor() {
    super();

    this.title;
    this.thumbnail;
  }

  render() {
    const { title, thumbnail } = this;

    if(!title && !thumbnail) {
      return;
    }

    return html`
      <div>
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
      </div>
    `;
  }
}