# Custom Message Editor Plugin for BetterSEQTA+
The first community made plugin for betterseqta+

## Installation
1. Clone this repo and BetterSEQTA+'s repo
2. Copy everything in `modules.json` to the `package.json` file in BetterSEQTA+
3. Create a new folder in `src/plugins/built-in/` called `CME`
4. Copy plugin.ts and index.ts
5. Copy `css/ckeditor.css` into BetterSEQTA+'s `src/css` folder.
6. Add the following before the Monofile line `...monofile...`:
   ```typescript
   import {customMessageEditorPlugin} from "./built-in/CME/plugin.ts"
   pluginManager.registerPlugin(customMessageEditorPlugin);
   ```
7. Build BetterSEQTA+ following BetterSEQTA+'s `readme.md` file

## Usage
Toggle the setting in settings and refresh your SEQTA. All previous features + a new editor will be present in your compose message dialog.
## Contributions
Please create a pull request to fix issues with the extension.
