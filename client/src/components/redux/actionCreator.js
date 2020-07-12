export function UpChampionToStore(typeData, format, version, data) {
  return {
    type: "UP_CHAMPIONS_TO_STORE",
    typeData,
    format,
    version,
    data,
  };
}

export function UpInputSearchToStore(input) {
  return {
    type: "SEARCH_INPUT",
    input: input,
  };
}
export function UpTagsSearchToStore(tags) {
  return {
    type: "SEARCH_TAGS",
    tags: tags,
  };
}
export function UpPositionSearchToStore(position) {
  return {
    type: "SEARCH_POSITION",
    position: position,
  };
}
export function IsLogin() {
  return {
    type: "IS_LOGIN",
  };
}
export function IsLogout() {
  return {
    type: "IS_LOGOUT",
  };
}
