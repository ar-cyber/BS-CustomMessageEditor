// my-awesome-plugin.ts
import { Plugin, PluginAPI, PluginSettings} from 'betterseqta-plugin-api';
import { HandleCME } from "index.ts";
export interface CustomMessageEditorSettings extends PluginSettings {
  enabled: {
    type: 'boolean';
    default: true;
    title: 'Enable The Custom Message Editor';
    description: 'Turn on the custom message editor';
  };
  // Add more settings as needed
}

export interface CMEPluginStorage {
  lastRun: string;
  // Add more storage fields as needed
}

const cme: Plugin<CustomMessageEditorSettings, CMEPluginStorage> = {
  id: 'cme',
  name: 'Custom Message Editor',
  description: 'An officially endorsed plugin adding custom message editor plugin.',
  version: '1.0.0',
  author: 'Andrew R',
  license: 'MIT',
  settings: {
    enabled: {
      type: 'boolean',
      default: true,
      title: 'Enable The Custom Message Editor',
      description: 'Turn on the custom message editor.',
    },
    // Initialize your settings here
  },
  run: async (api) => {
    // Your plugin logic goes here
    await api.seqta.waitForElement('.uiSlidePane');
    await handleCME()
  },
};

export default cme;
