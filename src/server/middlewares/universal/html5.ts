const htmlTemplate = (
  preLoadedMeta: string,
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
        ${preLoadedMeta}
        ${preLoadScripts}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" />
        <style>
          html, body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
          }

          html {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }
        </style>
        <style>
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