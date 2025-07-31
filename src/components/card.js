import { LitElement, html } from 'lit';
import sheet from './card.css' with { type: 'css'};

class Card extends LitElement {
  static styles = [sheet];

  static properties = {
    title: {type: String},
    thumbnail: {type: String}
  };

  constructor() {
    super();

    this.title;
    this.thumbnail;
  }

  render() {
    const { title, thumbnail } = this;

    return html`
      <div>
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
      </div>
    `;
  }
}

customElements.define('x-card', Card);