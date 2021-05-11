import i18n from '../../i18n/configs';
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from './languageActions'
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

export default (state = defaultState, action: LanguageActionTypes) => {
    
    switch (action.type) {
      case CHANGE_LANGUAGE: i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
      case ADD_LANGUAGE: return {...state, languageList: [...state.languageList,action.payload]}
      default: return state;
    }

};
