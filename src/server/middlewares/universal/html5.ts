const htmlTemplate = (
  title: string,
  appId: string,
  appHtml: string,
  css: string,
  preLoadScripts: string,
  postLoadScripts: string,
) => (
    `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        ${preLoadScripts}
        <style id="styles-target">
          ${css}
        </style>
      </head>
      <body>
        <div id="${appId}">${appHtml}</div>
        ${postLoadScripts}
      </body>
    </html>`
  )

export default htmlTemplate