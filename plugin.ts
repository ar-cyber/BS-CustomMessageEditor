// Required Modules
import { BasePlugin } from "@/plugins/core/settings";
import { booleanSetting, defineSettings, Setting } from "@/plugins/core/settingsHelpers";
import { type Plugin } from "@/plugins/core/types";
import { handleCME } from "index.ts"
// Code
const customMessageEditorPlugin: Plugin<typeof settings> = {
  id: "cme",
  name: "Custom Message Editor",
  description: "Working custom message editor for SEQTA Learn. Officially endorsed plugin.",
  version: "1.1.2",
  disableToggle: true,

  run: async (api) => {
    api.seqta.onMount(".assessmentsWrapper", handleCME)
  }
};

export default customMessageEditorPlugin;
