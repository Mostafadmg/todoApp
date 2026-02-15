import { appState } from '../state/state.js'

export function renderBackground() {
  const theme = appState.theme
  const baseUrl = './'

  return /*html*/ `
       <div class="background-img">
      <picture class="background-picture">
        <source srcset="${baseUrl}images/bg-mobile-${theme}.jpg" media="(max-width: 600px)" />
        <source srcset="${baseUrl}images/bg-desktop-${theme}.jpg" media="(min-width: 768px)" />

        <img src="${baseUrl}images/bg-mobile-${theme}.jpg" alt="" />
      </picture>
    </div>
    `
}
