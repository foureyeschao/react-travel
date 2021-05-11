export interface ILanguageState {
  language: "en" | "fr" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: ILanguageState = {
  language: "en",
  languageList: [
    { name: "English", code: "en" },
    { name: "Français", code: "fr" },
    { name: "中文", code: "zh" },
  ],
};

export default (state = defaultState, action: any) => {

    switch (action.type) {
      case 'change_language': return { ...state, language: action.payload }
      case 'add_language': return {...state, languageList: [...state.languageList,action.payload]}
      default: return state;
    }

};
