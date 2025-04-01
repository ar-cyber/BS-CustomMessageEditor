# Custom Message Editor Plugin for BetterSEQTA+
The first community made plugin for betterseqta+

## Installation
1. Clone this repo
2. Add modules to the root of BetterSEQTA+ (append all of the `dependencies` in our `package.json` into the BetterSEQTA+ `package.json`.)
3. Create a new folder in `src/plugins/built-in/` called `CME`
4. Copy plugin.ts and index.ts
5. Copy `css/ckeditor.css` into BetterSEQTA+'s `src/css` folder.
6. Add the following before the Monofile line `...monofile...`:
   ```
   import {customMessageEditorPlugin} from "./built-in/CME/plugin.ts"
   pluginManager.registerPlugin(customMessageEditorPlugin);
   ```
7. Build BetterSEQTA+ following BetterSEQTA+'s `readme.md` file

## Usage
Toggle the setting in settings and refresh your SEQTA. All previous features + a new editor will be present in your compose message dialog.
