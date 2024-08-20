import { Conversation, GlobalConfig } from '@interfaces';

export const globalConfigLocalKey = 'GLOBAL_CONFIG_LOCAL';
export const localConversationKey = 'LOCAL_CONVERSATION';

// From https://platform.openai.com/docs/models/model-endpoint-compatibility
export const supportedModels = [
  'SparkDesk-v4.0',
  'qwen2-7b-instruct',
] as const;

export type SupportedModel = (typeof supportedModels)[number];

export const defaultModel: SupportedModel = 'SparkDesk-v4.0';

export const supportedImageModels = [
  'SparkDesk-v4.0',
  'hunyuan-pro',
  'Replicate',
] as const;

export type SupportedImageModels = (typeof supportedImageModels)[number];

export const defaultImageModel: SupportedImageModels = 'SparkDesk-v4.0';

// From https://platform.openai.com/docs/api-reference/images/create
export const supportedImgSizes = ['256x256', '512x512', '1024x1024'] as const;

export type SupportedImgSize = (typeof supportedImgSizes)[number];

export const supportedLanguages = [
  {
    label: '简体中文',
    value: 'zh',
  },
  {
    label: 'English',
    value: 'en',
  },
];

export const layoutConfig = ['full', 'loose', 'default'] as const;

export type LayoutConfig = (typeof layoutConfig)[number];

export const defaultLayoutConfig: LayoutConfig = 'default';

export const defaultGloablConfig: GlobalConfig = {
  password: '',
  openAIApiKey: '',
  model: defaultModel,
  imageModel: defaultImageModel,
  save: true,
  continuous: true,
  messagesCount: 4,
  temperature: 1,
  imagesCount: 1,
  imageSize: '256x256',
  lang: 'en',
  discordChannelId: '',
  discordServerId: '',
  discordToken: '',
  layout: defaultLayoutConfig,
};

export const defaultConversation: Conversation = {
  id: '1',
  title: '',
  messages: [],
  mode: 'text',
  createdAt: Date.now(),
};

export const midjourneyConfigs = {
  timeout: 5 * 60 * 1000, // 5min
  interval: 20 * 1000, // every 20 second
};
