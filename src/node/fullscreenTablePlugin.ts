import { readFileSync } from "node:fs";

import clientScript from "gen/index.client.js";
import clientStyles from "gen/index.client.css";

const NAME = "vuepress-plugin-fullscreen-table";

export const fullscreenTablePlugin = (options) => (app) => {
  app.options.head.push(["style", { id: `${NAME}-styles` }, clientStyles]);
  app.options.head.push([
    "script",
    { id: `${NAME}-script`, type: "module" },
    clientScript,
  ]);

  return {
    name: NAME,
    multiple: false,

    extendsMarkdown: (md) => {
      md.renderer.rules.table_open = () => {
        return `<div class="${NAME}-wrapper"><button data-type="fullscreen-table">fullscreen</button><table>`;
      };
      md.renderer.rules.table_close = () => {
        return `</table></div>`;
      };
    },
  };
};
